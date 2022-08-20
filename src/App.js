import { hover } from '@testing-library/user-event/dist/hover';
import './App.css';
import { useState } from 'react';
import profilePic from './img/profilePic.jpg'
import location from './img/location.png'
import phone from './img/phone.png'
import email from './img/email.png'
import aries from './img/aries.png'
import logo from './img/logo.png'
import resume from './img/resume.png'
import anypoint from './img/anypoint.png'
import bitbucket from './img/bitbucket.jpg'
import CSS3 from './img/CSS3.png'
import dataweave from './img/dataweave.png'
import firebasepng from './img/firebasepng.png'
import git from './img/git.png'
import html from './img/html.png'
import js from './img/js.png'
import json from './img/json.webp'
import mulesoft from './img/mulesoft.png'
import postman from './img/postman.png'
import raml from './img/raml.png'
import react from './img/react.png'
import tailwindcss from './img/tailwindcss.png'
import vscode from './img/vscode.jpg'

const App = () => {
  const [page, setPage] = useState("about");
  const [download, setDownload] = useState(false)
  return (
    <div className='main_container'>
    <div className='card'>
      <div className='card_header animate'>
         <div className='card_cover'></div> 
          <img className='card_pic' src={profilePic}></img>
          <h1 className='card_fullname'>Varsha Narla </h1>
           <h2 className='card_jobtitle'>Application Development Analyst </h2>
      </div>
      <div className={(page === 'exp' || page === 'skill') ? 'card_main exp_height' : 'card_main'}>
        {/* About section */}
        { page === 'about' && 
          <div className={page === 'about' ? 'card_section animate' : 'card_section'} id='about'> 
            <div className='card_content'>
              <div className='card_subtitle'>ABOUT</div>
              <p className='about_data'>
                Ready to pickup the opportunities that would excite me to invest more TIME and EFFORT
              </p>
            </div>
            <div className='card_social'>
              <a href='https://www.facebook.com/narla.varsha/' className='card_social_icons'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 50 50"
                >    
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path></svg>
              </a>
              <a href='https://www.instagram.com/narlavarsha/' className='card_social_icons'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="42" height="42"
                viewBox="0 0 64 64"
                ><path d="M 31.820312 12 C 13.439312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.439312 52 31.820312 52 L 32.179688 52 C 50.560688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 28 16 L 36 16 C 47.129 16 48 16.871 48 28 L 48 36 C 48 47.129 47.129 48 36 48 L 28 48 C 16.871 48 16 47.129 16 36 L 16 28 C 16 16.871 16.871 16 28 16 z M 41.994141 20 C 40.889141 20.003 39.997 20.900859 40 22.005859 C 40.003 23.110859 40.900859 24.003 42.005859 24 C 43.110859 23.997 44.003 23.099141 44 21.994141 C 43.997 20.889141 43.099141 19.997 41.994141 20 z M 31.976562 22 C 26.454563 22.013 21.987 26.501437 22 32.023438 C 22.013 37.545437 26.501437 42.013 32.023438 42 C 37.545437 41.987 42.013 37.498562 42 31.976562 C 41.987 26.454563 37.498562 21.987 31.976562 22 z M 31.986328 26 C 35.299328 25.992 37.992 28.673328 38 31.986328 C 38.007 35.299328 35.326672 37.992 32.013672 38 C 28.700672 38.008 26.008 35.327672 26 32.013672 C 25.992 28.700672 28.673328 26.008 31.986328 26 z"></path></svg>
              </a>
              <a href='https://www.linkedin.com/in/narla-varsha-b5551b172/' className='card_social_icons'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="32" height="32"
                viewBox="0 0 50 50"
              >    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg>
              </a>
              <a href='https://github.com/VarshaNarla' className='card_social_icons'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="37" height="37"
                viewBox="0 0 64 64"
                style={{margin :'0px 5px'}}
                ><path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path></svg>
              </a>
            </div>
          </div>
        } 
        {/* Experience section */}
        { page === 'exp' && 
          <div className={page === 'exp' ? 'card_section animate' : 'card_section'} id='exp'> 
            <div className='card_content'>
              <div className='card_subtitle'>WORK EXPERIENCE </div>
                <div className='card_timeline'>
                  <div className='card_item' data-year='2022'>
                    <div className='card_item_title'>
                      Mulesoft Developer at Accenture
                    </div>
                    <div className='card_item_desp'>
                      Working with Mulesoft to integrate it to Salesforce
                    </div>
                  </div>
                  <div className='card_item' data-year='2019'>
                    <div className='card_item_title'>
                      Mulesoft Developer at TCS
                    </div>
                    <div className='card_item_desp'>
                      Worked with Mulesoft to develope backend api's
                    </div>
                  </div>
                  <div className='card_item' data-year='2022'>
                    <div className='card_item_title'>
                      FrontEnd Developer 
                    </div>
                    <div className='card_item_desp'>
                      Started FrontEnd Development out of intrest and worked in 
                      couple of projects
                    </div>
                  </div>
                  <div className='card_item' data-year='2022'>
                    <div className='card_item_title'>
                      Projects Worked
                    </div>
                    <div className='card_item_desp card_projects'>
                      <div className='card_projects_details'>
                        <a href='https://varshanarla.github.io/city/'>
                          <img src={logo} className='card_project_icons'></img>
                        </a>
                        <p className='card_project_title'>City </p>
                      </div>
                      <div className='card_projects_details'>
                        <a href='https://varshanarla.github.io/profile/'>
                          <img src={aries} className='card_project_icons'></img>
                        </a>
                        <p className='card_project_title'>Profile </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        }
        {/* About section */}
        { page === 'skill' && 
          <div className={page === 'skill' ? 'card_section animate' : 'card_section'} id='skill'> 
            <div className='card_content'>
              <div className='card_subtitle'>TECH SKILL</div>
              <div className='card_skill'>
                <div className='card_skill_title'>MiddleWare</div>
                <div className='card_skill_desp'>
                  <div className='card_skill_desp_items'>
                    <img src={mulesoft} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>MULESOFT</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={dataweave} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>DATAWEAVE</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={raml} className="card_skill_icon" style={{width:"40px"}}></img>
                    <p className='card_skill_icon_title'>RAML</p>
                  </div>  
                </div>
                <div className='card_skill_title'>FrontEnd</div>
                <div className='card_skill_desp'>
                  <div className='card_skill_desp_items'>
                    <img src={html} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>HTML</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={CSS3} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>CSS</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={js} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>JS</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={react} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>REACT</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={json} className="card_skill_icon" style={{width:"40px"}}></img>
                    <p className='card_skill_icon_title'>JSON</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={tailwindcss} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>TAILWINDCSS</p>
                  </div>
                </div>
                <div className='card_skill_title'>Familiar With</div>
                <div className='card_skill_desp'>
                  <div className='card_skill_desp_items'>
                    <img src={bitbucket} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>BiTBUCKET</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={git} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>GITHUB</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={postman} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>POSTMAN</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={firebasepng} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>FIREBASE</p>
                  </div>
                </div>
                <div className='card_skill_title'>Familiar IDEs</div>
                <div className='card_skill_desp'>
                  <div className='card_skill_desp_items'>
                    <img src={vscode} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>VS CODE</p>
                  </div>
                  <div className='card_skill_desp_items'>
                    <img src={anypoint} className="card_skill_icon"></img>
                    <p className='card_skill_icon_title'>ANYPOINT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        } 
        {/* Contact section */}
        { page === 'contact' && 
          <div className={page === 'contact' ? 'card_section animate' : 'card_section'}  id='exp'> 
            <div className='card_content'>
                <div className='card_subtitle'>CONTACT</div>
                  <div className='card_contact'>
                    <img src={location} className="card_contact_icon"></img>
                    <p className='card_contact_details'>Vasavi Heights, Vidya Nagar, Hyderabad, 500044, Telangana </p>
                  </div>
                  <div className='card_contact'>
                    <img src={phone} className="card_contact_icon"></img>
                    <p className='card_contact_details'>9052147400</p>
                  </div>
                  <div className='card_contact'>
                    <img src={email} className="card_contact_icon"></img>
                    <p className='card_contact_details'>narlavarsha.98@gmail.com</p>
                  </div>
                  <div className='card_contact'>
                    <img src={resume} className="card_contact_icon"></img>
                    <div className='resume_download'>
                      <a href='varsha_resume.pdf' download='varsha_resume.pdf' className='card_contact_details' onClick={()=>setDownload(true)} style={{cursor:"pointer",margin:"10px 10px 3px 10px"}}>Resume</a>
                      {download && <p className='resume_download_text'>Downloaded</p>}
                    </div>
                  </div>
            </div>
          </div>
        }
      </div>
      <div className='card_buttons'>
        <button data-section="#about" className={ (page ==='about') ? 'is_active' : "" }  onClick={()=> {setPage("about")}} >About</button>
        <button data-section="#experience" className={ (page ==='exp') ? 'is_active' : "" }  onClick={()=> {setPage("exp")}} >Experience</button>
        <button data-section="#experience" className={ (page ==='skill') ? 'is_active' : "" }  onClick={()=> {setPage("skill")}} >Skill</button>
        <button data-section="#contact" className={ (page ==='contact') ? 'is_active' : "" }  onClick={()=> {setPage("contact")}}  >Contact</button>
      </div>
    </div>
  </div>
  )
  
}

export default App;
