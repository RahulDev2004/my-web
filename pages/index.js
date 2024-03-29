import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div data-spy="scroll" data-target=".fixed-top">
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
    <div class="container">
        
        
       
        <a class="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative" /></a> 

        <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#header">HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#registration">TRIAL</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#features">FEATURES</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#details">DETAILS</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">DROP</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item page-scroll" href="article.html">ARTICLE DETAILS</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item page-scroll" href="terms.html">TERMS CONDITIONS</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item page-scroll" href="privacy.html">PRIVACY POLICY</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#purchase">PURCHASE</a>
                </li>
            </ul>
            <span class="nav-item social-icons">
                <span class="fa-stack">
                    <a href="#your-link">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a href="#your-link">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div> 
    </div> 
</nav> 




<header id="header" class="header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">

              
                <div class="slider-container">
                    <div class="swiper-container text-slider">
                        <div class="swiper-wrapper">
                            
                        
                            <div class="swiper-slide">
                                <div class="row">
                                    <div class="col-lg-6 col-xl-7">
                                        <div class="image-container">
                                            <img class="img-fluid" src="images/header-slide-1.jpg" alt="alternative"/>
                                        </div>
                                    </div> 
                                    <div class="col-lg-6 col-xl-5">
                                        <div class="text-container">
                                            <h1 class="h1-large">Desktop App Landing Page</h1>
                                            <p class="p-large">The first desktop app for web designers. Create beautiful websites with minimum HTML/CSS</p>
                                            <a class="btn-solid-lg page-scroll" href="#registration">FREE TRIAL</a>
                                            <a class="btn-outline-lg page-scroll" href="#features">DISCOVER</a>
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                            

                            
                            <div class="swiper-slide">
                                <div class="row">
                                    <div class="col-lg-6 col-xl-7">
                                        <div class="image-container">
                                            <img class="img-fluid" src="images/header-slide-2.jpg" alt="alternative"/>
                                        </div> 
                                    </div> 
                                    <div class="col-lg-6 col-xl-5">
                                        <div class="text-container">
                                            <h1 class="h1-large">Web Design Desktop App</h1>
                                            <p class="p-large">Sketch your layout, mockup the prototye and create the actual design using Revo web design app</p>
                                            <a class="btn-solid-lg page-scroll" href="#registration">FREE TRIAL</a>
                                            <a class="btn-outline-lg page-scroll" href="#features">DISCOVER</a>
                                        </div>
                                    </div> 
                                </div> 
                            </div> 
                            

                           
                            <div class="swiper-slide">
                                <div class="row">
                                    <div class="col-lg-6 col-xl-7">
                                        <div class="image-container">
                                            <img class="img-fluid" src="images/header-slide-3.jpg" alt="alternative" />
                                        </div> 
                                    </div> 
                                    <div class="col-lg-6 col-xl-5">
                                        <div class="text-container">
                                            <h1 class="h1-large">Prototype And Create Designs</h1>
                                            <p class="p-large">With Revo it's a breeze to turn your designs intro code. Use the visual builder and export as HTML</p>
                                            <a class="btn-solid-lg page-scroll" href="#registration">FREE TRIAL</a>
                                            <a class="btn-outline-lg page-scroll" href="#features">DISCOVER</a>
                                        </div> 
                                    </div> 
                                </div> 
                            </div> 
                            

                        </div> 
                        
                        
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                        

                    </div> 
                </div> 
                

            </div>
        </div> 
        <div class="row">
            <div class="col-lg-12">
                <div class="partner-container">
                    <p class="p-small">Featured in</p>
                    <img class="img-fluid" src="images/partner-logo-1.png" alt="alternative"/>
                    <img class="img-fluid" src="images/partner-logo-2.png" alt="alternative"/>
                    <img class="img-fluid" src="images/partner-logo-3.png" alt="alternative"/>
                    <img class="img-fluid" src="images/partner-logo-4.png" alt="alternative"/>
                    <img class="img-fluid" src="images/partner-logo-5.png" alt="alternative"/>
                </div> 
            </div> 
        </div> 
    </div> 
    
</header> 


<div id="registration" class="form-1 bg-dark-blue">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="text-container">
                    <h2>Register For The Free Trial</h2>
                    <p>You are just a few clicks away from using the first desktop app dedicated to web designers and developers. Fill out the form to get the 30-day trial and you will receive the download link</p>
                    <ul class="list-unstyled li-space-lg">
                        <li class="media">
                            <i class="fas fa-square"></i><div class="media-body"><strong>Prototype easier</strong> using intuitive features and design tools</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i><div class="media-body"><strong>Design layouts</strong> with faster with efficient components</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i><div class="media-body"><strong>Export to code</strong> and effortlessly upload your projects online</div>
                        </li>
                    </ul>
                </div>
            </div> 
            <div class="col-lg-6">

                
                <form id="registrationForm">
                    <div class="form-group">
                        <input type="text" class="form-control-input" id="rname" required/>
                        <label class="label-control" for="rname">Name</label>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control-input" id="roccupation" required/>
                        <label class="label-control" for="roccupation">Occupation</label>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control-input" id="remail" required/>
                        <label class="label-control" for="remail">Email</label>
                    </div>
                    <div class="form-group checkbox">
                        <input type="checkbox" id="rterms" value="Agreed-to-Terms" required/>I agree with the website's <a href="privacy.html">Privacy Policy</a> and <a href="terms.html">Terms & Conditions</a>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="form-control-submit-button">SIGN UP</button>
                    </div>
                </form>
                

            </div>
        </div> 
    </div> 
</div> 




<div id="features" class="cards-1 bg-dark-blue">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="h2-heading">Revo's Features</h2>
                <p class="p-heading">Revo is the first desktop app which helps web designers and developers create beautiful and efficient layouts for their online projects</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                
                
                <div class="card">
                    <div class="card-image">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Prototype Faster</h5>
                        <p>Cutting edge tools that will help you sketch your ideas in record time and prepare the design</p>
                    </div>
                </div>
                

              
                <div class="card">
                    <div class="card-image">
                        <i class="fas fa-tv"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Design Layouts</h5>
                        <p>Turn your prototypes into final designs using established and well-known features</p>
                    </div>
                </div>
                

                
                <div class="card">
                    <div class="card-image">
                        <i class="fas fa-user-tag"></i>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Export To Code</h5>
                        <p>When you're done designing export your layouts quickly to editable HTML/CSS code</p>
                    </div>
                </div>
               

            </div> 
        </div> 
    </div> 
</div> 



<div id="details" class="basic-1 bg-dark-blue">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-xl-7">
                <div class="image-container">
                    <img class="img-fluid" src="images/details-1.jpg" alt="alternative" />
                </div> 
            </div> 
            <div class="col-lg-6 col-xl-5">
                <div class="text-container">
                    <h2>Prototype With Revo</h2>
                    <p>Our experienced designers and developers have implemented cutting edge tools that will help you sketch your ideas in record time and prepare the design</p>
                    <ul class="list-unstyled li-space-lg">
                        <li class="media">
                            <i class="fas fa-square"></i>
                            <div class="media-body"><strong>Use a single app</strong> to get from sketch to actual code</div>
                        </li>
                        <li class="media">
                            <i class="fas fa-square"></i>
                            <div class="media-body"><strong>Bundled templates</strong> to help you get inspired faster</div>
                        </li>
                    </ul>
                    <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox">LIGHTBOX</a>
                </div> 
            </div>
        </div> 
    </div> 
</div> 



<div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide">
    <div class="row">
        <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
  <div class="col-lg-8">
            <div class="image-container">
                <img class="img-fluid" src="images/details-lightbox.jpg" alt="alternative" />
            </div> 
  </div> 
  <div class="col-lg-4">
            <h3>Goals Setting</h3>
    <hr />
            <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
            <h4>User Feedback</h4>
            <p>This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
            <ul class="list-unstyled li-space-lg">
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">Splash screen panel</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">Statistics graph report</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">Events calendar layout</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">Location details screen</div>
                </li>
                <li class="media">
                    <i class="fas fa-square"></i><div class="media-body">Onboarding steps interface</div>
                </li>
            </ul>
            <a class="btn-solid-reg mfp-close page-scroll" href="#registration">FREE TRIAL</a> <button class="btn-outline-reg mfp-close as-button" type="button">BACK</button>
  </div>
</div> 
</div> 



<div class="tabs">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-xl-5">
                <div class="tabs-container">
        
                   
                    <ul class="nav nav-tabs" id="revoTabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">PROTOTYPE</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">DESIGN</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">EXPORT</a>
                        </li>
                    </ul>
               
                    
                 
                    <div class="tab-content" id="revoTabsContent">
    
                   
                        <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                            <h4>Prototype Easier With Revo</h4>
                            <p>It's now easier than ever to get your ideas into completed designs with Revo desktop app. Our <a class="turquoise page-scroll" href="#features">features</a> section shows how we are able to achieve all this.</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><strong>Experienced teams</strong> of top designers and developers</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><strong>Enthusiastic passion</strong> for all things web design related</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body"><strong>Focus on simplicity</strong> when it comes to the user interface</div>
                                </li>
                            </ul>
                        </div> 
                        <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <div class="media-bullet">1.</div>
                                    <div class="media-body"><strong>Speed</strong> is important for our users so we invest a lot of time and resources to make everything work faster</div>
                                </li>
                                <li class="media">
                                    <div class="media-bullet">2.</div>
                                    <div class="media-body"><strong>Reliability</strong> is what we're focused on achieving besides speed because we want our app to work all the time</div>
                                </li>
                                <li class="media">
                                    <div class="media-bullet">3.</div>
                                    <div class="media-body"><strong>Standards</strong> are another factor that we take into consideration when developing our tools</div>
                                </li>
                                <li class="media">
                                    <div class="media-bullet">4.</div>
                                    <div class="media-body"><strong>Performance</strong> is a key factor for our desktop apps</div>
                                </li>
                            </ul>
                        </div> 


                        <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                            <p><strong>Our goal is to empower</strong> web designers and developers reach their full potential and help them get their designs from layouts to code in the shortest amount of time.</p>
                            <p><strong>Design and layouts</strong> are the main focus of our apps but we also work on export-to-code functionalities.</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">It's a fun and captivating endeavour that we love</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-square"></i>
                                    <div class="media-body">We're passionate about our work and it shows</div>
                                </li>
                            </ul>
                        </div> 
    
                    </div> 

                </div>
            </div> 
            <div class="col-lg-6 col-xl-7">
                <div class="image-container">
                    <img class="img-fluid" src="images/details-2.jpg" alt="alternative"/>
                </div> 
            </div> 
        </div> 
    </div> 
</div> 




<div class="basic-2 bg-dark-blue">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="h2-heading">Video Presentation</h2>
                <p class="p-heading">Check out our video presentation for Revo desktop app. It will take you through an entire design project from the initial sketch to the final code</p>

                
                <div class="image-container">
                    <div class="video-wrapper">
                        <a class="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
                            <img class="img-fluid" src="images/video-preview.jpg" alt="alternative" />
                            <span class="video-play-button">
                                <span></span>
                            </span>
                        </a>
                    </div> 
                </div> 
           

            </div> 
        </div> 
    </div> 
</div> 



<div class="slider-1">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">

                
                <div class="slider-container">
                    <div class="swiper-container card-slider">
                        <div class="swiper-wrapper">
                            
                            
                            <div class="swiper-slide">
                                <div class="card">
                                    <img class="card-image" src="images/testimonial-1.jpg" alt="alternative" />
                                    <div class="card-body">
                                        <p class="testimonial-text">I just finished my trial period and was so amazed with the support and results that I quickly purchased the app</p>
                                        <p class="testimonial-author">Jude Thorn - Designer</p>
                                    </div>
                                </div>
                            </div> 
    
                         
                            <div class="swiper-slide">
                                <div class="card">
                                    <img class="card-image" src="images/testimonial-2.jpg" alt="alternative" />
                                    <div class="card-body">
                                        <p class="testimonial-text">I don't know how I managed to get work done without Revo. The speed of this application is amazing!</p>
                                        <p class="testimonial-author">Roy Smith - Developer</p>
                                    </div>
                                </div>        
                            </div>
                            <div class="swiper-slide">
                                <div class="card">
                                    <img class="card-image" src="images/testimonial-3.jpg" alt="alternative" />
                                    <div class="card-body">
                                        <p class="testimonial-text">This app has the potential of becoming a mandatory tool in every developer's day to day regular operations</p>
                                        <p class="testimonial-author">Marsha Singer - Marketer</p>
                                    </div>
                                </div>        
                            </div> 
    
                           
                            <div class="swiper-slide">
                                <div class="card">
                                    <img class="card-image" src="images/testimonial-4.jpg" alt="alternative" />
                                    <div class="card-body">
                                        <p class="testimonial-text">Searching for a great prototyping and layout design app was difficult but thankfully I found Revo suite</p>
                                        <p class="testimonial-author">Tim Shaw - Designer</p>
                                    </div>
                                </div>
                            </div>
    
                           
                            <div class="swiper-slide">
                                <div class="card">
                                    <img class="card-image" src="images/testimonial-5.jpg" alt="alternative" />
                                    <div class="card-body">
                                        <p class="testimonial-text">Revo's support team is amazing. They've helped me with some issues and I am so grateful to the entire team</p>
                                        <p class="testimonial-author">Lindsay Spice - Designer</p>
                                    </div>
                                </div>        
                            </div> 

                            <div class="swiper-slide">
                                <div class="card">
                                    <img class="card-image" src="images/testimonial-6.jpg" alt="alternative"/>
                                    <div class="card-body">
                                        <p class="testimonial-text">Who would have thought that Revo can provide such amazing results in just a few weeks of normal basic use</p>
                                        <p class="testimonial-author">Ann Black - Developer</p>
                                    </div>
                                </div>        
                            </div> 
                        
                        </div> 
    
                        
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                       
    
                    </div> 
                </div> 

            </div> 
        </div> 
    </div> 
</div> 




<div id="purchase" class="basic-3 bg-dark-blue">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="h2-heading">Get Revo And Start Designing</h2>
                <p class="p-heading p-large">The first desktop app for web designers and developers which helps them get their ideas from initial sketch to finalized code easier. Revo brings to the table cutting-edge technologies to help you get projects online faster.</p>
                <a class="btn-solid-lg" href="#your-link">$89 BUY</a> <a class="btn-outline-lg page-scroll" href="#registration">FREE TRIAL</a>
            </div>
        </div> 
    </div> 
</div> 



<div class="basic-4 bg-dark-blue">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="resource-container">
                    <img class="img-fluid" src="images/resources-1.jpg" alt="alternative"/>
                    <div class="text-container">
                        <h4>User Showcases</h4>
                        <p>Check out these awesome customer showcases to convince you to give Revo and try right away</p>
                    </div>
                </div> 
               <div class="resource-container">
                    <img class="img-fluid" src="images/resources-2.jpg" alt="alternative"/>
                    <div class="text-container">
                        <h4>Knowledge Center</h4>
                        <p>We've gathered some great resources to help you learn how to use Revo and overcome issues</p>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
</div> 



<div class="footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="footer-col first">
                    <h6>About Revo</h6>
                    <p class="p-small">Revo is a desktop app website Bootstrap HTML template created for desktop applications, to present their features and control panel options</p>
                </div>
                <div class="footer-col second">
                    <h6>Links</h6>
                    <ul class="list-unstyled li-space-lg p-small">
                        <li>Important: <a href="terms.html">Terms & Conditions</a>, <a href="privacy.html">Privacy Policy</a></li>
                        <li>Useful: <a href="#">Colorpicker</a>, <a href="#">Icon Library</a>, <a href="#">Illustrations</a></li>
                        <li>Menu: <a class="page-scroll" href="#header">Home</a>, <a class="page-scroll" href="#registration">Trial</a>, <a class="page-scroll" href="#features">Features</a>, <a class="page-scroll" href="#details">Details</a></li>
                    </ul>
                </div> 
                <div class="footer-col third">
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-facebook-f fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-twitter fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-pinterest-p fa-stack-1x"></i>
                        </a>
                    </span>
                    <span class="fa-stack">
                        <a href="#your-link">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fab fa-instagram fa-stack-1x"></i>
                        </a>
                    </span>
                    <p class="p-small">We would love to hear from you <a href="mailto:contact@website.com"><strong>contact@website.com</strong></a></p>
                </div> 
            </div> 
        </div> 
    </div> 
</div> 



<div class="copyright">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <p class="p-small">Copyright © <a href="https://inovatik.com">Template by Inovatik</a></p>
            </div> 
        </div> 
    </div> 
</div> 
  


    </div>
  )
}
