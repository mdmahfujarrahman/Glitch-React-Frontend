import { Component } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper } from "swiper/react";

const Name = "Rajib Ahmed";
const desc = "Competently conceptualize alternative synergy and technically and niche markets. Efficiently impact technically sound outsourcing rath tnclicks-and-mortar best practices.";



class ProfileHeader extends Component {

    constructor(props){
        super(props);
        
    }

    
    render() {

        let user = this.props.user;

        let AuthorSocialList = [];

        if(user.twitter_page) {
            AuthorSocialList.push(
                {
                    IconName: 'icofont-twitter',
                    IconLink: user.twitter_page,
                }
            ); 
        }

        if(user.instagram_page) {
            AuthorSocialList.push(
                {
                    IconName: 'icofont-instagram',
                    IconLink: user.instagram_page,
                }
            ); 
        }

        if(user.twitch_page) {
            AuthorSocialList.push(
                {
                    IconName: 'icofont-twitch',
                    IconLink: user.twitch_page,
                }
            ); 
        }

        if(user.youtube_page) {
            AuthorSocialList.push(
                {
                    IconName: 'icofont-youtube',
                    IconLink: user.youtube_page,
                }
            ); 
        }

        if(user.facebook_page) {
            AuthorSocialList.push(
                {
                    IconName: 'icofont-facebook',
                    IconLink: user.facebook_page,
                }
            ); 
        }

        return (
            <div className="product-details">
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="product-thumb">
                            <div className="swiper-container pro-single-top">
                            <div className="single-thumb">
                                                <img src={"https://picsum.photos/200"} />
                                    </div>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="post-content">
                            <h4>{user.first_name} {user.last_name}</h4>

                            <div className="social-media">
                                {AuthorSocialList.map((val, i) => (
                                    <a target={"_blank"} href={`${val.IconLink}`} key={i}><i className={`${val.IconName}`}></i></a>
                                ))}
                            </div>
                            
                            <p>{user.bio}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileHeader;