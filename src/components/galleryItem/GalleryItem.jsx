import React from 'react';
import { points } from '../gallery/imageData';
import './GalleryItem.scss';

  export default function GalleryItem({ src, index, columnOffset }) {
    const values = points[index];
    if(!values) return null;

    const [row, column, spanRow, spanColumn] = values;
    return (
        <div className="gallery-item"
        style={{
          gridArea: `${row} / ${column + columnOffset} / span ${spanRow} / span ${spanColumn}`
        }}>
            <div className="gallery-item-image">
                <div className="gallery-item-image__inner"
                style={{ backgroundImage: `url(${src})`}}>

                </div>
            </div>
        </div>
    )
  }