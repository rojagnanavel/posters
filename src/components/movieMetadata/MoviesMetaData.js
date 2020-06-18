import React from 'react';
import classes from './MoviesMetaData.module.scss';
import {Link} from 'react-router-dom';
const MoviesMetaData = (props)=>{
        return (
            <div className={classes.imageAlignment}>
                <Link to={{
                    pathname:'/postermeta',
                    state:{
                        val:props.items
                    }
                }}>         
                <img className={classes.imageStyle} 
                                alt="Movie Posters" 
                                src={props.items.imageUrl} 
                                />
                </Link>
            </div>
            )

}
export default MoviesMetaData;

