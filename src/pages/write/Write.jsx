import React from 'react';
import writeImg from "../../pic/sunflowers3.jpg"
import './Write.css';

export default function Write() {
    return(
        <section className="write">
          <img className="writeImg" src={ writeImg } alt="" />
    
                <form className="writeForm">
                  <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                      <i className="writeIcon fas fa-plus"></i>
                      <input type="file" id="fileInput" style={{ display: "none" }} />
                  </label>
                      <span>Upload photos</span> 
                  </div>
                  <label htmlFor="text">Title goes here</label>
                  <input type="text" id="text" className="writeInput" autoFocus={ true } />
                 
                <label htmlFor="selectInput">Service Category</label>
                  <select id="selectInput" className="selectInput">
                    <option value="послуги косметолога">Послуги косметолога</option>
                    <option value="перукарі / барбер майстри">Перукарі / Барбер майстри</option>
                    <option value="послуги з нарощування">Послуги з нарощування</option>
                    <option value="перекладачі">Перекладачі</option>
                  </select>

                <label htmlFor="urlInput"> Instagram / Facebook Profil</label> 
                  <input type="url" id="urlInput"/>
                
                <textarea 
                    placeholder="Service or product description"
                    type="text"
                    className="writeInput writeText"
                    >
                </textarea>
            
                <button className='writeSubmit'>Publish</button>
                </form>
        </section>
    )
}