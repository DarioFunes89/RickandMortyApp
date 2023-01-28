import React from "react";
import SearchBar from "../searchbar/SearchBar";
import s from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({onSearch}){

    return <div className={s.div}>
        <Link to='/about' style={{ color: 'white', marginRight:'5px' }}>About</Link>
        <Link to='/home' style={{ color: 'white' }}>Home</Link>
        <SearchBar  onSearch={onSearch}/>
        </div>;
} 