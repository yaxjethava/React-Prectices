import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Hudies from '../components/Hudies'
import Footer from '../components/Footer'
import Table from '../components/table'



const Home = () => {
    // for hudis component data
    const hudie_home = [
        {
            img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTksyO1nC5D7y_8zuKdu_ZCOjkub1MKE521xVKrnvv5syI-Wimc-MTgQFADMcFnxbluehmx-T2oqYFiP5W52iAv5YohSQeyHw',
            title: 'Classic Hoodie',
            description: 'Crew neck with cool',
            price: 'Rs.899',
            s_price: 'Rs.1999',
            offer: '(60% OFF)'
        },
        {
            img: 'https://nobero.com/cdn/shop/files/olive.jpg?v=1727093459',
            title: 'Classic Hoodie 2',
            description: 'Pullover style',
            price: 'Rs.1899',
            s_price: 'Rs.3999',
            offer: '(75% OFF)'
        },
        {
            img: 'https://nobero.com/cdn/shop/files/maroon_6d1a7ce1-50d1-49e5-8e80-dd2e8c5fb3b4.jpg?v=1734686032',
            title: 'Boyfriend Fit Classic',
            description: 'Pullover style besties',
            price: 'Rs.1599',
            s_price: 'Rs.2999',
            offer: '(40% OFF)'
        },
        {
            img: 'https://nobero.com/cdn/shop/files/navy-blue_fb51525d-3ada-416b-a855-db38d2a3dfde.jpg?v=1734696003',
            title: 'Classic Hoodie Blue',
            description: 'Adjustable hood with drawcord',
            price: 'Rs.1299',
            s_price: 'Rs.3799',
            offer: '(80% OFF)'
        },
        {
            img: 'https://nobero.com/cdn/shop/files/black_94ef5b95-b2a3-447f-8234-6c85a43c046d.jpg?v=1734845956',
            title: 'Classic Hoodie Black',
            description: 'A regular fit with long sleeves',
            price: 'Rs.1199',
            s_price: 'Rs.2999',
            offer: '(69% OFF)'
        }
    ]

    //for customer table data
    const table_data=[
        {
          image: "https://i.pinimg.com/originals/a3/7b/e5/a37be5b9709175f1527761157463ec38.jpg",
          email: "markotto@email.com",
          added: "01/03/2020",
          username: "Markotto89",
          status: "Active"
        },
        {
          image: "https://passport.immigration.gov.mv/images/PPS/sample.png",
          email: "jacobthornton@email.com",
          added: "01/03/2020",
          username: "Jacobthornton",
          status: "Waiting for Reassignment"
        },
        {
          image: "https://static.vecteezy.com/system/resources/thumbnails/036/553/207/small_2x/as-on-passport-young-man-with-stylish-haircut-glasses-blue-eyes-look-straight-little-smiling-and-self-collected-dressed-in-white-shirt-and-blue-tie-unshaven-over-white-background-photo.jpg",
          email: "larrybird@email.com",
          added: "01/03/2020",
          username: "Larry_bird",
          status: "pending"
        },
        {
          image: "https://t4.ftcdn.net/jpg/03/78/43/25/360_F_378432516_6IlKiCLDAqSCGcfc6o8VqWhND51XqfFm.jpg",
          email: "johndoe@email.com",
          added: "01/03/2020",
          username: "Johndoe1990",
          status: "Active"
        },
        {
          image: "https://media.istockphoto.com/id/1176772006/photo/portrait-of-man-looking-at-camera-over-white-background.jpg?s=612x612&w=0&k=20&c=hhlfr_8TgalVqSMprxcXHKhCnqixB3sxKDUXnr7IfT8=",
          email: "garybird@email.com",
          added: "01/03/2020",
          username: "Garybird_2020",
          status: "Waiting for Reassignment"
        }
      ];

      console.log(table_data)

    return (
        <>
            <Navbar />
            <HeroSection />
            <Hudies dataObj={hudie_home} table={table_data}/>
            <Table data={table_data}/>
            <Footer/>
        </>
    )
}

export default Home
