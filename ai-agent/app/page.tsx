import { Builder, Browser } from 'selenium-webdriver';

export default async function Home(){
  const driver =  await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get('http://localhost:8080');
  
}