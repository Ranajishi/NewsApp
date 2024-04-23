import React from 'react'
import "./News.css"
import { Carousel } from 'react-bootstrap'
import Images from '../../Constant/Images';
import Sectionweather from '../../container/section1/Sectionweather';


const News = () => {
  return (
    <div className='news_main_page'>
      {/* ------slider start */}
      <div className="slider_new">
        <Carousel fade
        prevIcon={<img src={Images.larrow} alt="Previous" className='larrow'/>} // Custom previous arrow
        nextIcon={<img src={Images.rarrow} alt="Next" />}  className='rarrow'>
          <Carousel.Item>
          <div className='banner_main_new'>
            <p className="hr_back">4 hours ego</p>
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2148203597.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp" alt="" className='banner_new'/>
          <div className="banner_content_new">
            <div className="headline_new">Biden marks Earth Day with new solar energy funds and steps to stand up American Climate Corps</div>
            <div className="para">  
President Joe Biden traveled to Triangle, Virginia, Monday to mark Earth Day, unveiling $7 billion in grant funding for solar power under the Inflation Reduction Act and announcing new steps to stand up his administration’s American Climate Corps – a program popular with youth climate groups.

The announcements come days after the Biden administration made several significant conservation...</div>
          </div>
        </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='banner_main_new'>
          <p className="hr_back">7 hours ego</p>

          <img src="https://i.ndtvimg.com/i/2016-12/earthquake-generic_650x400_71481076561.jpg" alt="" className='banner_new'/>
          <div className="banner_content_new">
            <div className="headline_new">6.3 Magnitude Earthquake Hits Taiwan</div>
            <div className="para">Taipei:  A 6.3 magnitude earthquake struck Taiwan's eastern county of Hualien on Tuesday, the island's weather administration said, with no immediate reports of damage.
The quake shook buildings in the capital, Taipei. The quake had a depth of 5.5 km (3.4 miles), the weather administration said.Taiwan has been hit by hundreds of aftershocks after a 7.2 magnitude earthquake struck Hualien earlier this month.....</div>
          </div>
        </div>
          </Carousel.Item>
          
          <Carousel.Item>
          <div className='banner_main_new'>
          <p className="hr_back">6 hours ego</p>

          <img src="https://dims.apnews.com/dims4/default/de60fd4/2147483647/strip/true/crop/6000x4000+0+0/resize/1440x960!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc1%2Fb0%2Fef0754ec0ecccf1f5db24be55b10%2F8f36f0d2475f4b0d859a4eeaa62b32c0" alt="" className='banner_new'/>
          <div className="banner_content_new">
            <div className="headline_new">John Sterling honored by Yankees for 36 seasons and 5,631 games as radio voice</div>
            <div className="para"> NEW YORK (AP) — After 36 seasons as the voice of the New York Yankees, John Sterling needed just 90 seconds to say goodbye. Sterling was honored with an on-field ceremony before Saturday’s 2-0, 10-inning loss to Tampa Bay, five days after the 85-year-old broadcaster announced his retirement 2 1/2 weeks into the season. Sterling received gifts that included a jersey with No. 5,631 for his games total,....</div>
          </div>
        </div>
          </Carousel.Item>
        </Carousel>
        

      </div>
      {/* ------slider end */}
      <Sectionweather />
      {/* recent news--------- */}
      <div className="recent_news">
        <h1 className="rec_title">Recent News</h1>
        <div className="newsdiv">
          <div className="news_row1">
            <div className="col1">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/2024-04-15t095527z-92777204-rc2067aait0b-rtrmadp-3-athletics-marathon-china.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp" alt="" className='rec_img1_1'/>
              <h6 className="head_rec">Beijing half marathon winners stripped of medals after African trio let Chinese runner win</h6>
            </div>
            <div className="col2">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/283939c2-de00-4978-adb1-35926f765fa7.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp" alt="" className='rec_img1_1'/>
              <h6 className="head_rec">How Johnson came to embrace Ukraine aid and defy his right flank</h6>
            </div>
          </div>
          <div className="news_row1">
            <div className="col3">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/c-2023-04-23t140403z-943616671-up1ej4n132pev-rtrmadp-3-athletics-london.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp" alt="" className='rec_img1_1'/>
              <h6 className="head_rec">What to know ahead of this year’s London Marathon</h6>
            </div>
            <div className="col4">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1252144748.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp" alt="" className='rec_img1_1'/>
              <h6 className="head_rec">Look up to the sky for the Lyrid meteor shower and the full pink moon</h6>
            </div>
            <div className="col5">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147862639-20240419041936989.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp" alt="" className='rec_img1_1'/>
              <h6 className="head_rec">Opinion: In a two-issue election, Biden should act now on immigration</h6>
            </div>
          </div>          
          <div className="news_row1 news_row3">
            <div className="col6">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147966527.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp" alt="" className='rec_img1_1'/>
              <h6 className="head_rec">Lionel Messi produces virtuoso MLS performance with two goals and assist in Inter Miami’s 3-1 victory over Nashville SC</h6>
            </div>
            <div className="col7">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1252729245.jpg?q=w_1110,c_fill/f_webp" alt="" className='rec_img1_1'/>
              <h6 className="head_rec">Here’s how to see the upcoming worm moon lunar eclipse</h6>
            </div>
          </div>          
          <div className="news_row1">
            <div className="col8">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/350-park-daytime.jpg?q=w_2000,c_fill/f_webp" alt="" className='rec_img1_1'/>
              <h6 className="head_rec">The new 62-story tower set to transform New York City’s skyline</h6>
            </div>
            <div className="col9">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-145308226.jpg?q=w_2000,c_fill/f_webp" alt="" className='rec_img1_1'/>
              <h6 className="head_rec">Legendary Formula 1 driver Michael Schumacher’s watch collection is going on sale</h6>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default News
