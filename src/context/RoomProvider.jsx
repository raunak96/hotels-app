import React, { createContext, useState, useEffect, useCallback } from 'react';
// import items from "../data";
import Client from "../Contentful";

const RoomContext = createContext();

const RoomProvider = ({children}) => {
    const [roomData, setRoomData] = useState({rooms: [],sortedRooms: [],featuredRooms: [],loading: true});
    const [fieldsForFilter, setFieldsForFilter] = useState({type: "all",capacity: 1,price: 0,minPrice:  0,maxPrice: 0,minSize: 0,maxSize: 0,breakfast: false,pets: false,intialised: false});
    
    useEffect(()=>{
        console.log("Use effect 1 called!");
        const getData = async()=>{
            try {
                const {items} = await Client.getEntries({
                    content_type: "hotelRoom",
                    order: "fields.price"
				});
				const rooms = items.map((item) => {
                    let id = item.sys.id;
                    let images = item.fields.images.map((image) => image.fields.file.url);
                        return { ...item.fields, images, id };
                });
                const featuredRooms = rooms.filter((room) => room.featured === true);
                const maxPrice = Math.max(...rooms.map((item) => item.price));
                const maxSize = Math.max(...rooms.map((item) => item.size));
                setFieldsForFilter(prevState=>({...prevState,price:maxPrice,maxPrice,maxSize,intialised: true}));
                setRoomData(prevState=>({...prevState,rooms,sortedRooms:rooms, featuredRooms,loading:false}));
            } catch (error) {
                setRoomData(prevState=>({...prevState,loading:false}));
            }
        }
        getData();
        
    },[]);

    const filterRooms = useCallback((roomsTemp,filteredFields)=>{
        const {rooms} = roomsTemp;
        let {type,capacity,price,minSize,maxSize,breakfast,pets} = filteredFields;
        capacity=parseInt(capacity);
        price = parseInt(price);

        let sortedRooms = [...rooms];
        if(type!=='all'){
            sortedRooms = sortedRooms.filter(room=> room.type===type);
        }
        if(capacity!==1){
            sortedRooms = sortedRooms.filter(room=> room.capacity>=capacity);
        }
        sortedRooms = sortedRooms.filter(room=> room.price<=price && room.size>=parseInt(minSize) && room.size<=parseInt(maxSize));
        if(breakfast)
            sortedRooms = sortedRooms.filter(room=>room.breakfast);
        if(pets)
            sortedRooms = sortedRooms.filter(room=>room.pets);
        return sortedRooms;
    },[]);

    useEffect(()=>{
        console.log(fieldsForFilter.intialised)
        if(fieldsForFilter.intialised)
            setRoomData(prevState=>({...prevState,sortedRooms: filterRooms(prevState,fieldsForFilter)}));
    },[fieldsForFilter,filterRooms]);

    const getRoom = (slug)=> roomData.rooms.find(room=> room.slug===slug);

    const handleChange = (e)=> {
        const {type,name} = e.target;
        const value = type === "checkbox" ? e.target.checked : e.target.value;
        console.log(`type: ${type}, name:${name}, value:${value}`)
        setFieldsForFilter({...fieldsForFilter,[name]:value});
    }
    
    return (
        <RoomContext.Provider value={{...roomData,...fieldsForFilter,getRoom,handleChange}}>
            {children}
        </RoomContext.Provider>
    );
};

export {RoomProvider,RoomContext};