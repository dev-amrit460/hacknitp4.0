import React from 'react'
import SponsorBP from './SponsorBP';
import './Sponsors.css';
import Organiser from '../organiser/Organiser';
import logo from '../../images/hacknitp.png';
import logo1 from '../../images/gdsc.png'

const Sponsors = () => {
    const data=[
        {
            name:'HackSlash Club',
            logo:`${logo}`,
            facebook:'https://www.facebook.com/hackSlash.nitp',
            insta:'https://www.instagram.com/hackslash.nitp/',
            linkedin:'https://www.linkedin.com/company/hackslash',
            desc:'Hackslash Developers\' Club, NIT Patna is a community intended to provide a room for college students to learn and collaborate on a plethora of projects among themselves as well as with mentors. It is open for every student, ranging from novice developers who are just starting, to advanced developers who want to further enhance their skills.'
        },
        {
            name:'GDSC NITP',
            logo:`${logo1}`,
            facebook:'',
            insta:'',
            linkedin:'',
            desc:'Google Developer Student Clubs NIT Patna is local community group of NIT Patna college students interested in Google developer technologies. The GDSC organizes numerous events ranging from small meetups for working on projects to large-scale hackathons.'
        },
    ]
    return (
        <div>
            <h1 className="heading"><span className='white'>
                SPONSORS \ </span> PARTNERS
            </h1>

            <h2 className="level2-heading platinum">
                Platinum Sponsors
            </h2>
            <div className="platinum-cont">
                <SponsorBP />
                <SponsorBP />
            </div>
            <h2 className="level2-heading gold">
                Gold Sponsors
            </h2>
            <div className="platinum-cont">
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
            </div>
            <h2 className="level2-heading silver">
                Silver Sponsors
            </h2>
            <div className="platinum-cont">
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />
                <SponsorBP />

            </div>
            <br></br>
            <br></br>
            <div>
            <h1 className="heading"><span className='white'>
                Lead </span> Organizer
            </h1><br/>
            <Organiser name={data[0].name} logo={data[0].logo} desc={data[0].desc} facebook={data[0].facebook} insta={data[0].insta} linkedin={data[0].linkedin}/>
            <br/>
            <h1 className="heading"><span className='white'>
                Community </span> Partner
            </h1>
            <br/>
            <Organiser name={data[1].name} logo={data[1].logo} desc={data[1].desc} facebook={data[1].facebook} insta={data[1].insta} linkedin={data[1].linkedin}/>
            <br/>
            </div>

            <div className="enquire-sponsors-cont" data-aos="fade-up">
                <h1 className="heading"><span className='white'>Want to Sponsor us?</span></h1>
                <p className="last-yr-sponsors">
                    Click here to see our last year sponsors
                    <i class="fab fa-send"></i>
                </p>
                <h2 className="heading">
                    <span className="white">
                        Contact us at <a href="mailto:hackslash@nitp.ac.in" className='mail-id'> hackslash@nitp.ac.in</a>
                    </span>
                </h2>
                <div className="sponsor-brochure-btn dnld-sponsor-broc">
                    <button className='btn-primary'>Download Sponsor Brochure</button>
                </div>

            </div>


        </div>
    )
}

export default Sponsors
