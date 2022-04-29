import React from 'react'
import Navbar from './Navbar'

const Theme = (props) => {

const darkMode=()=>{
  document.querySelector('.main').classList.add('mainDark');
  document.querySelector('.navbar').classList.add('navbarDark');
  document.querySelector('.disc').classList.add('discDark')
  document.querySelector('.black').classList.add('white')

  let navLinks=document.querySelectorAll('.nav-link');
  for(let i of navLinks){
    i.classList.add('navLinkDark');
  }

  let homePgTxt1=document.querySelectorAll('.homePgTxt1');
  if( homePgTxt1!==null){
    for(let i of homePgTxt1){
      i.classList.add('homePgTxt1Dark');
    }
  }
 

  let signUpBox=document.querySelectorAll('.signUpBox');
  if(signUpBox!==null){
    for(let i of signUpBox){
      i.classList.add('signUpBoxDark');
    }
  }
  
  if(document.querySelector('.Sheading')!==null){
    document.querySelector('.Sheading').style.color='white'
  }

  
  let fIn=document.querySelectorAll('.fIn');
  if(fIn!==null){
    for(let i of fIn){
      i.classList.add('fInDark');
    }
  }
 

  let signUpIcon=document.querySelectorAll('.signUpIcon');
  if(signUpIcon!==null){
    for(let i of signUpIcon){
      i.classList.add('signUpIconDark');
    }
  }
  
  if(document.querySelector('.txt')!==null){
    document.querySelector('.txt').style.color='white'
  }
  
  let cBox=document.querySelectorAll('.cBox');
  if(cBox!==null){
    for(let i of cBox){
      i.classList.add('cBoxDark');
    }
  }
  
  let cIcon=document.querySelectorAll('.cIcon');
  if(cIcon!==null){
    for(let i of cIcon){
      i.classList.add('cIconDark');
    }
  }
 
  if(document.querySelector('.contactMain2')!==null){
    document.querySelector('.contactMain2').classList.add('contactMain2Dark')
  }

  if(document.querySelector('.contactMain21')!==null){
    document.querySelector('.contactMain21').classList.add('contactMain21Dark')
  }

  let cInput=document.querySelectorAll('.cInput');
  if(cInput!==null){
    for(let i of cInput){
      i.classList.add('cInputDark');
    }
  }
  
  let inputBoxInput=document.querySelectorAll('.inputBoxInput');
  if(inputBoxInput!==null){
    for(let i of inputBoxInput){
      i.classList.add('inputBoxInputDark');
    }
  }
  
  if(document.querySelector('.inputBox2')!==null){
    document.querySelector('.inputBox2').classList.add('inputBox2Dark');
  }
  if(document.querySelector('.notesBgTxt')!==null){
    document.querySelector('.notesBgTxt').classList.add('notesBgTxtDark');
  }
  if(document.querySelector('.notesBgImg')!==null){
    document.querySelector('.notesBgImg').classList.add('notesBgImgDark');
  }
  if( document.querySelector('.closebtn')!==null){
    document.querySelector('.closebtn').classList.add('closebtnDark');
  }

  let cards=document.querySelectorAll('.card');
  if(cards!==null){
    for(let i of cards){
      i.classList.add('cardDark');
    }
  }
 

  let cardImg=document.querySelectorAll('.cardImg');
  if(cardImg!==null){
    for(let i of cardImg){
      i.classList.add('cardImgDark');
    }
  }


  if(document.querySelector('.aboutBox')!==null){
    document.querySelector('.aboutBox').classList.add('aboutBoxDark')
  }
  if(document.querySelector('.aboutBox2')!==null){
    document.querySelector('.aboutBox2').classList.add('aboutBox2Dark')
  }
  if(document.querySelector('.proffession')!==null){
    document.querySelector('.proffession').style.color='white';
  }
  document.querySelector('.navbar-toggler-icon').classList.add('navbar-toggler-icon-dark')
  document.querySelector('.navbar-toggler').classList.add('navbar-toggler-dark')
  if(document.querySelector('.errorPageTxt')!==null){
    document.querySelector('.errorPageTxt').classList.add('errorPageTxtDark')
  }
  if(document.querySelector('.errorPageBg')!==null){
    document.querySelector('.errorPageBg').classList.add('errorPageBgDark')
  }
  localStorage.setItem('mode', 'darkmode')
}


const lightMode=()=>{
  document.querySelector('.main').classList.remove('mainDark');
  document.querySelector('.navbar').classList.remove('navbarDark');
  document.querySelector('.disc').classList.remove('discDark')
  document.querySelector('.black').classList.remove('white')
  let navLinks=document.querySelectorAll('.nav-link');
  for(let i of navLinks){
    i.classList.remove('navLinkDark');
  }

  let homePgTxt1=document.querySelectorAll('.homePgTxt1');
  if(homePgTxt1!==null){
    for(let i of homePgTxt1){
      i.classList.remove('homePgTxt1Dark');
    }  
  }
 
  let signUpBox=document.querySelectorAll('.signUpBox');
  if(signUpBox!==null){
    for(let i of signUpBox){
      i.classList.remove('signUpBoxDark');
    }
  }
 
  if(document.querySelector('.Sheading')!==null){
    document.querySelector('.Sheading').style.color='black'
  }

  let fIn=document.querySelectorAll('.fIn');
  if(fIn!==null){
    for(let i of fIn){
      i.classList.remove('fInDark');
    }
  }
 
  let signUpIcon=document.querySelectorAll('.signUpIcon');
  if(signUpIcon!==null){
    for(let i of signUpIcon){
      i.classList.remove('signUpIconDark');
    }
  }
 

  if(document.querySelector('.txt')!==null){
    document.querySelector('.txt').style.color='black'
  }


  let cBox=document.querySelectorAll('.cBox');
  if(cBox!==null){
    for(let i of cBox){
      i.classList.remove('cBoxDark');
    }  
  }
  
  let cIcon=document.querySelectorAll('.cIcon');
  if(cIcon!==null){
    for(let i of cIcon){
      i.classList.remove('cIconDark');
    }  
  }
  

  if(document.querySelector('.contactMain2')!==null){
    document.querySelector('.contactMain2').classList.remove('contactMain2Dark')
  }

  if(document.querySelector('.contactMain21')!==null){
    document.querySelector('.contactMain21').classList.remove('contactMain21Dark')
  }

  let cInput=document.querySelectorAll('.cInput');
  if(cInput!==null){
    for(let i of cInput){
      i.classList.remove('cInputDark');
    }
  }


  let inputBoxInput=document.querySelectorAll('.inputBoxInput');
  if(inputBoxInput!==null){
    for(let i of inputBoxInput){
      i.classList.remove('inputBoxInputDark');
    }
  }


  if(document.querySelector('.inputBox2')!==null){
    document.querySelector('.inputBox2').classList.remove('inputBox2Dark');
  }
  if(document.querySelector('.notesBgTxt')!==null){
    document.querySelector('.notesBgTxt').classList.remove('notesBgTxtDark');
  }
  if(document.querySelector('.notesBgImg')!==null){
    document.querySelector('.notesBgImg').classList.remove('notesBgImgDark');
  }
  if( document.querySelector('.closebtn')!==null){
    document.querySelector('.closebtn').classList.remove('closebtnDark');
  }

  let cards=document.querySelectorAll('.card');
  if(cards!==null){
    for(let i of cards){
      i.classList.remove('cardDark');
    }
  }
  

  let cardImg=document.querySelectorAll('.cardImg');
  if(cardImg!==null){
    for(let i of cardImg){
      i.classList.remove('cardImgDark');
    }  
  }


  if(document.querySelector('.aboutBox')!==null){
    document.querySelector('.aboutBox').classList.remove('aboutBoxDark')
  }
  if(document.querySelector('.aboutBox2')!==null){
    document.querySelector('.aboutBox2').classList.remove('aboutBox2Dark')
  }
  if(document.querySelector('.proffession')!==null){
    document.querySelector('.proffession').style.color='#332e2e8a';
  }
  document.querySelector('.navbar-toggler-icon').classList.remove('navbar-toggler-icon-dark')
  document.querySelector('.navbar-toggler').classList.remove('navbar-toggler-dark')
  if(document.querySelector('.errorPageTxt')!==null){
    document.querySelector('.errorPageTxt').classList.remove('errorPageTxtDark')
  }
  if(document.querySelector('.errorPageBg')!==null){
    document.querySelector('.errorPageBg').classList.remove('errorPageBgDark')
  }
  localStorage.setItem('mode', 'lightmode')
}

  return (
    <>
    <Navbar darkMode={darkMode} lightMode={lightMode} showAlert={props.showAlert}/>
    </>
  )
}

export default Theme;
