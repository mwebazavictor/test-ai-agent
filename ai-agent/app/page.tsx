"use client";
import { Builder, Browser } from 'selenium-webdriver';
import {useState} from "react";
import { FormEvent } from 'react';

export default async function Home(){
  const driver =  await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get('http://localhost:8080');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const pageTitle = await driver.getTitle();
  setTitle(pageTitle);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUrl(event.target.value);
  };
  const handleSubmit = async(event: FormEvent) =>{
    event.preventDefault();
    event.preventDefault();
    await driver.get(url);
    const pageTitle = await driver.getTitle();
    setTitle(pageTitle);
  };
  return(<div>
    <form onSubmit={handleSubmit}>
      <input type="text" 
      placeholder='Enter a URL' 
      value={url}
      onChange={handleChange}
       />
    </form>
    <h1>The Page Title is {title}</h1>
  </div>);
}