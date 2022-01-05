import React from 'react'
import s from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className='container'>
                <div className={s.top}>
                    <div className={s.body}>
                        <div className={s.list}>
                            <div className={s.name}>Job Seekers</div>
                            <a href='/' className={s.link}>Search Jobs</a>
                            <a href='/'className={s.link}>Create Resume</a>
                            <a href='/' className={s.link}>Job Allert</a>
                            <a href='/' className={s.link}>Advice to Job Seeker</a>
                        </div>
                        <div className={s.list}>
                            <div className={s.name}>Employer</div>
                            <a href='/' className={s.link}>Post a Job</a>
                            <a href='/' className={s.link}>Search Resume</a>
                            <a href='/' className={s.link}>Support</a>
                            <a href='/' className={s.link}>Advice to Employer</a>
                        </div>
                        <div className={s.list}>
                            <div className={s.name}>Job meteor</div>
                            <a href='/' className={s.link}>About Us</a>
                            <a href='/' className={s.link}>Blog </a>
                            <a href='/' className={s.link}>FAQ</a>
                        </div>
                        <div className={s.list}>
                            <div className={s.name}>Partner with Us</div>
                            <a href='/' className={s.link}>Advertising on the website</a>
                            <a href='/' className={s.link}>Affiliate Program</a>
                            <a href='/' className={s.link}>Contact Us</a>
                        </div>
                    </div>
                    <div className={s.social}>
                        <a href='/' className='icon-tw'/>
                        <a href='/' className='icon-li'/>
                        <a href='/' className='icon-fb'/>
                        <a href='/' className='icon-inst'/>
                        <a href='/' className='icon-b'/>
                    </div>    
                </div>
                <div className={s.bottom}>
                    <a href='/' className={s.link}>Privacy Policy </a>
                    <a href='/' className={s.link}>© 2021 Job Meteor. All rights reserved</a>
                    <a href='/' className={s.link}>Terms of Use</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
