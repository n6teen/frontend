import React from 'react';
import { useLocation } from 'react-router-dom';
import { PlayCircleFilled, } from '@ant-design/icons';
import { Tooltip,message} from 'antd';
import Navbar from '../../components/navbar';
import AddMyList from '../../components/AddMyList/addmylist';
import Download from '../../components/Download/Download';
import Review from '../../components/Review/Review';
import Share from '../../components/Share/Share';
import { useState } from 'react';
import './movieDetailpage.css';
import { ReviewInterface } from '../../interfaces/IReview';
export default function MovieDetailPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title');
  const duration = searchParams.get('duration');
  const poster = searchParams.get('poster');
  const description = searchParams.get('des');


  const [review, setReview] = useState('');
  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value);
  };


  const [messageApi, contextHolder] = message.useMessage();
  const [roomNumber, setRoom_number] = useState("");
  const [roomPrice, setRoom_price] = useState("");

  // const handleSubmit = async (values: ReviewInterface) => {


  //   console.log(values)

  //   let res = await CreateRoom(values);
  //   if (res.status) {
  //     messageApi.open({
  //       type: "success",
  //       content: "บันทึกข้อมูลสำเร็จ",
  //     });
  //   } else {
  //     messageApi.open({
  //       type: "error",
  //       content: "บันทึกข้อมูลไม่สำเร็จ",
  //     });
  //   }
  // };

  
  return (
    <div className='bg'>
      {contextHolder}

      <Navbar/>
      <div className="box">
        <div className='movie-detail'>
          <div className='movie-detail-left'>
            <div className="blur">
                {poster && <img className='poster-blur' src={decodeURIComponent(poster)} alt="Movie Poster" />}
              <div className='blur2'></div>
            </div>
            <div className="imgporter">
              {poster && <img className='poster' src={decodeURIComponent(poster)} alt="Movie Poster" />}
            </div>
          </div>
          <div className='movie-detail-right'>
            <div className='detail-text'>
                <h1>{title}</h1>
                <p>{duration}</p>
                <p><b>หมวดหมู่:</b></p>
                <p><b>เรื่องย่อ:</b> {description}</p>
                <p><b>ผู้กำกับ:</b></p>
                <p><b>นักแสดงนำ:</b></p>
                <div className='detail-menu'>
                  <div style={{position:'absolute',left:'0px',top:'0px'}}><Tooltip title='เล่น' color='#565656'><PlayCircleFilled style={{color:'white',fontSize:55}} /></Tooltip></div>
                  <div style={{position:'absolute',left:'70px',top:'0px'}}><AddMyList/></div>
                  <div style={{position:'absolute',left:'140px',top:'0px'}}><Download/></div>
                  <div style={{position:'absolute',left:'210px',top:'0px'}}><Review/></div>
                  <div style={{position:'absolute',left:'280px',top:'0px'}}><Share/></div>
                </div>
            </div>
              
          </div>
          
        </div>
        <div className='review-text-box'>
        <textarea
              rows={4}
              cols={50}
              placeholder="Write a review..."
              value={review}
              onChange={handleReviewChange}
              style={{ marginTop: '20px' }}
        />

        <button type='submit' style={{ marginTop: '10px' }}>Submit Review</button>
      </div>
    
      </div>

    </div>






    // 
    //    <Navbar/>
    //   <div style={{,height:'100vh',width:'100vw',fontFamily:'Noto Sans Thai, sans-serif'}}>
    //   <div style={{ position:'absolute',display: 'flex', flexDirection: 'row', backgroundColor: 'pink', width: '100vw', height: '100vh', justifyContent: 'space-between' }}>
    //     <div style={{ flex: 1,display:'flex',flexDirection:'row', width: '400px', height: '570px',margin:'5% 0% 0% 10%',position:'absolute',borderRadius:'25px',boxShadow:'0px 0px 5px rgba(180, 180, 180, 0.7)'}}>
    //       {poster && <img src={decodeURIComponent(poster)} alt="Movie Poster" style={{ width: '100%', height: '100%',objectFit:'cover',borderRadius:'25px',}} />}
    //     </div>
    //     <div style={{ flex: 1,color: 'white' ,width:'35%',position:'absolute',margin:'6% 5% 5% 46%'}}>
    //       <h1>{title}</h1>
    //       <p>{duration}</p>
    //       <p><b>หมวดหมู่:</b></p>
    //       <p><b>เรื่องย่อ:</b> {description}</p>
    //       <p><b>ผู้กำกับ:</b></p>
    //       <p><b>นักแสดงนำ:</b></p>
    //     </div>
    //     <div style={{position:'absolute',margin:'35% 0% 0% 45%'}}>
    //       <Tooltip title='เล่น' color='#565656'><PlayCircleFilled style={{color:'white',fontSize:55}} /></Tooltip>
    //       <div style={{position:'absolute',left:'70px',top:'0px'}}><AddMyList/></div>
    //       <div style={{position:'absolute',left:'140px',top:'0px'}}><Download/></div>
    //       <div style={{position:'absolute',left:'210px',top:'0px'}}><Review/></div>
    //       <div style={{position:'absolute',left:'280px',top:'0px'}}><Share/></div>
    //     </div>
    //     <div style={{position:'absolute',top:'120%'}}>
    //         <textarea
    //           rows={4}
    //           cols={50}
    //           placeholder="Write a review..."
    //           value={review}
    //           onChange={handleReviewChange}
    //           style={{ marginTop: '20px' }}
    //         />

    //         <button onClick={submitReview} style={{ marginTop: '10px' }}>Submit Review</button>
    //   </div></div> 
    //   </div>
      
    // </div>
    
    
  );
}

 //   <div>
  //   <h2>{title} Details</h2>
  //   <p>Duration: {duration}</p>
  //   {poster && <img src={decodeURIComponent(poster)} alt="Movie Poster" style={{ width: '240px', height: '360px' }} />}    {/* แสดงข้อมูลเพิ่มเติมของหนังที่นี่ */}
  // </div>
