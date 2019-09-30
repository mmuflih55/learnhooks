import React from 'react';
import useStyles from './../Style/Style'
const Profile = () => {
    const classes = useStyles();

    return (
        <div className={classes.profileBg} style={{position:'absolute',top:65,display:'flex',alignContent:'center',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <div style={{display:'flex',alignContent:'center',justifyContent:'center', flexDirection:'column', alignItems:'center', minHeight:'85vh',width:'100vw',color:'white'}}>
                    <h1>Hi, Muhammad Muflih</h1>
                    <h2>Software Engineer with {new Date().getFullYear()-2017},{new Date().getMonth()-2} years experiences</h2>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <a href="https://github.com//mmuflih55" rel="noopener noreferrer" target="_blank"><i className="fa fa-github" style={{fontSize:48,color:'white',margin:10}}></i></a>
                        <a href="https://twitter.com/muh_muflih" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter" style={{fontSize:48,color:'white',margin:10}}></i></a>
                        <a href="https://www.linkedin.com/in/muhammad-muflih-574b2b71" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" style={{fontSize:48,color:'white',margin:10}}></i></a>
                        <a href="https://www.instagram.com/m_muflih5" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram" style={{fontSize:48,color:'white',margin:10}}></i></a>
                    </div>
                </div>
        </div>
    )
}

export default Profile;