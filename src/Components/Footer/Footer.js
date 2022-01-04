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
                            <a className={s.link}>Search Jobs</a>
                            <a className={s.link}>Create Resume</a>
                            <a className={s.link}>Job Allert</a>
                            <a className={s.link}>Advice to Job Seeker</a>
                        </div>
                        <div className={s.list}>
                            <div className={s.name}>Employer</div>
                            <a className={s.link}>Post a Job</a>
                            <a className={s.link}>Search Resume</a>
                            <a className={s.link}>Support</a>
                            <a className={s.link}>Advice to Employer</a>
                        </div>
                        <div className={s.list}>
                            <div className={s.name}>Job meteor</div>
                            <a className={s.link}>About Us</a>
                            <a className={s.link}>Blog </a>
                            <a className={s.link}>FAQ</a>
                        </div>
                        <div className={s.list}>
                            <div className={s.name}>Partner with Us</div>
                            <a className={s.link}>Advertising on the website</a>
                            <a className={s.link}>Affiliate Program</a>
                            <a className={s.link}>Contact Us</a>
                        </div>
                    </div>
                    <div className={s.social}>
                        <a className='icon-tw'></a>
                        <a className='icon-li'></a>
                        <a className='icon-fb'></a>
                        <a className='icon-inst'></a>
                        <a className='icon-b'></a> 
                    </div>    
                </div>
                <div className={s.bottom}>
                    <a className={s.link}>Privacy Policy </a>
                    <a className={s.link}>© 2021 Job Meteor. All rights reserved</a>
                    <a className={s.link}>Terms of Use</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
