import styled from "styled-components";
import { THEME } from "../../../constants/theme";

import { device } from "../../../constants/devise";

const { text, bg, colors } = THEME;

export const FirstBlockContentStyle = styled.div`
  background: url("${bg.img}") no-repeat center;
  background-size: cover;
  
  .wrapper {
  	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.rootRectangle};
	padding: 128px 0 0 87px;
	height: 100vh;
    
    .info-wrapper {
	    padding-bottom: 40px;
	    width: 100%;
	    margin-top: 50px;
	    .big-describe {
	      font-size: 46px;
	      line-height: 60px;
	    }
	    
	    .small-describe {
	      font-size: 22px;
	      line-height: 32px;
		  padding-bottom: 40px;
		  padding-top: 20px;
		  font-weight: 300;
		  width: 730px;
	    }
	    
	    .big-describe, .small-describe {
	      color: ${text.invert}
	    }
	  }
    
     @media ${device.laptopT} {
     		padding: 128px 80px 0 42px;
     		
     		.info-wrapper {
	        .big-describe {
	          font-size:72px;
		        line-height: 90px;  
	        }
     		}
     		
     }
     
     @media ${device.tabletT} {
        padding: 128px 40px 0 40px;
        .info-wrapper {
	        .big-describe  {
	          font-size: 46px;
		        line-height: 60px;
	        }
	        
	        .small-describe {
	          font-size: 24px;
		        line-height: 32px;
	        }
        }
        
     }
     
     @media ${device.mobileXL} {
       padding: 110px 10px 0 10px;
       
       .info-wrapper {
	       .big-describe {
	          font-size: 36px;
            line-height: 40px;
            padding-bottom: 10px;
	       }
	       
	       .small-describe {
	       		font-size: 18px;
		        line-height: 24px;
	       }
       }
       
     }
     
     @media ${device.mobileT} {
     	padding: 160px 10px 0 10px;
     }
  }
  
  
  
  
`;
