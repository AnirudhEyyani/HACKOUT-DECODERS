<!-- PROJECT LOGO -->
<h1 align="center"> CryptoTrader </h1>

An online web portal to show recent financial news with Crypto of choice to overview on the glance. These are elaborated in the upcoming sections. 

<br/>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#inspiration">Inspiration</a></li>
    <li><a href="#about-the-project">About the project</a></li>
    <li><a href="#technologies-used">Technologies used</a></li>
    <li><a href="#how-we-built-it">How we built it</a></li>
    <li><a href="#challenges-we-ran-into">Challenges we ran into</a></li>
    <li><a href="#guide-to-setup-the-project-locally">Guide to setup the project locally</a></li>
    <li><a href="#acknowledgements-and-references">Acknowledgements and References</a></li>
  </ol>
</details>



## Inspiration
Obtaining financial literacy is one of the most important things an individual can do to ensure prolonged financial stability. 
Strong financial knowledge and decision-making skills help people weigh options and make informed choices for their financial situations, such as deciding how and when to save and spend, comparing costs before a big purchase, and planning for retirement or other long-term savings. 

While investing in stock markets has become more popular in recent times, overall penetration remains low — only 2.78 crore Indians invest in the stock markets, which is around 2% of the country’s population. In comparison, over 50% of Americans own stocks. This is a mind set that can be changes if people are exposed to topics like investments, stocks and crypto which is a great financial practice. 


CryptoTrader provides a watch-list for Crypto and also provides relevent financial news and insights so that they have a mind set of using money wisely.

## About the project

<p align="center">

      
### Crypto Overview
Having the overview of the best performing Crypto Currency is a good practice as it improves the reasoning of why they are moving the way they are and also understanding the sentiment of the market.
      
### Financial News
News plays a very important role in how people invest and why people invest.Financial news is the key to understanding the stock market sentiment and also making the users aware about the different changes and reforms happening globally.

### Financial Knowledge
Having personal finances in-check is necessary and hence the there is a personal finance tracker which helps the user to keep a tab of their transactions, which is the first step towards financial growth and literacy.    


A list of all the references and resources we used to achieve (partially) our goal are listed in the acknowledgements.
## Technologies used                                                                                             
</p>

    
React.js as the base library along with Ant Design<br/>
Firebase for the authentication of the users so that every users information can be saved<br/>
Heroku to host the react app <br/>
Bing News API for financial news <br/>
Coinranking API for crypto currency overview <br/>


## How we built it

First we came up with a problem statement and started to design and prototype the basic functionality of the web app on Adobe Xd.

Then we followed with building a basic prototype of all the features that can be included. 

Then went with designing and developing UI using ReactJs & Ant Design (with help of few resources mentioned in the last section). 


## Challenges we ran into

The frontend developers were not familiar with Ant Design. So it took a while to build frontend and to polish it out.

This is our first time integrating different api's with a web application.

We intially thought of making a flutter app but were not able to proceed due to lack of resources.


## What's next for CryptoTrader

Due to the time constraint of the hackathon, many things were accomplished only till half way. These include :

- Unique Digital Cards: We are planning to build a feature where every user will be able to access a digital card that features all their acheivements
 based on their current and previous investments.

- More Investment Option: Currently we only have Crypto Currencies  and we intend to increase them by adding sections like investments options for buying and selling Crypto-Currency, mutual funds, bonds etc. 

- More responsive & optimized UI


## Guide to setup the project locally

Make sure you switch to node@12.22.1

To install node@12.22.1
   ```sh
    nvm install 12.22.1

    nvm use 12.22.1
   ```
Clone the repo
   ```sh
   git clone https://github.com/AnirudhEyyani/HACKOUT-DECODERS.git
   ```
Install NPM packages
   ```sh
   npm install
   ```
Run the local server inside the client folder
   ```sh
   npm start
   ```


## Acknowledgements and References
* [Coinranking](https://www.alphavantage.co/) Coinranking API
* [Bing News API](https://www.postman.com/product/api-repository/) Bing News API
* [Ant Design](https://ant.design//) Ant Design
