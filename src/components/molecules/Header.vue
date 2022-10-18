<template>
  <div>
    <div class="header">
      <div class="headWrapper">
        <a href="/" class="header-logo">
          <span class="logo-icon">
            <img class="OpenRentLogoSpinner white" src="//d10hbub4nkludc.cloudfront.net/images/white-logo-parts/logo-arrows2__white.png" alt="">
          </span>
          <img class="OpenRentLogo white" src="//d10hbub4nkludc.cloudfront.net/images/white-logo-parts/logo-text__white.png" alt="OpenRent">
        </a>
        <ul class="large-nav-list">
          <li class="has-sub" @mouseenter="showNavMenu($event.target)" @mouseleave="hideNavMenu($event.target)">
            <a href="/about">About <i class="fa fa-chevron-down"></i></a>
            <div class="sub-nav">
              <div id="about-nav" class="nav-image"></div>
              <ul> 
                <div class="col">              
                  <li><a href="/landlords-advertise-property-for-rent-on-rightmove-and-zoopla">Landlords</a></li>
                  <li><a href="/find-property-to-rent-from-private-landlords">Tenants</a></li>
                  <li><a href="/about">OpenRent</a></li>
                </div> 
              </ul>
            </div>
          </li>
          <li class="has-sub" @mouseenter="showNavMenu($event.target)" @mouseleave="hideNavMenu($event.target)">
            <a href="/our-pricing">Pricing &amp; Services <i class="fa fa-chevron-down"></i></a>
            <div class="sub-nav pricing-services-sub">
              <div id="price-nav" class="nav-image"></div>
              <ul>
                <div class="col">
                  <strong>Packages</strong>
                  <li><a href="/landlords-advertise-property-for-rent-on-rightmove-and-zoopla">Property Advertising</a></li>
                  <li><a href="/rent-now">Full Tenancy Creation</a></li>
                  <li><a href="/our-pricing">See All Pricing</a></li>
                </div>
                <div class="col">
                  <strong>Services</strong>
                  <li><a href="/tenant-referencing">Tenant Referencing</a></li>
                  <li><a href="/gas-safety-certificate-cp12">Gas Safety</a></li>
                  <li><a href="/landlord-energy-performance-certificates-epc">EPC</a></li>
                  <li><a href="/landlord-electrical-safety-certificates-eicr-pat-testing">Electrical Safety</a></li>
                  <li><a href="/rentcollection/about">Rent Collection</a></li>
                </div>
                <div class="col">
                  <li><a href="/landlord-inventory-and-check-in-services">Inventory</a></li>
                  <li><a href="/professional-photography-for-landlords">Photos &amp; Floor Plans</a></li>
                  <li><a href="/landlord-rent-guarantee-insurance">Rent Insurance</a></li>
                  <li><a href="/landlord-building-and-contents-insurance">Building Insurance</a></li>
                  <li><a href="/accompanied-viewings">Accompanied Viewings</a></li>
                  <li><a href="/landlord-legal-and-eviction-support">Legal Support</a></li>
                  <li><span class="tenant-price-note"><i class="fa fa-check-circle"></i>Tenants Don't Pay Admin Fees</span></li>
                </div>
              </ul>
            </div>
          </li>
          <li class="add-listing-cta"><a href="/listing/add" class="btn btn-success"><strong>+</strong> Add Listing</a></li>
          <li class="log-on-cta"><a id="signInWidgetFallBackButton" href="/account/simplelogon" class="sign-in-btn"><span><i class="fa fa-sign-in" aria-hidden="true"></i> Sign In</span></a></li>
        </ul>
        <div class="titleBox banda">
          <h1 id="titleBoxText">Renting the way it should be</h1>
          <h3>The destination for finding, advertising, and managing rental property</h3>
          <form action="/search/searchbydistance" id="search_by_location_form" method="get">    
            <div id="searchBoxContainer">
              <div class="input-group">
                <span class="input-group-btn">
                  <button id="mylocation1" class="mylocation btn btn-secondary" type="button" title="Houses and Flats to Rent Near Me">
                    <i class="fa fa-map-marker fa-2x" style="color: #9B9B9B;"></i>
                    <img class="loadingLocation" src="//d10hbub4nkludc.cloudfront.net/images/loadingSpinner.gif" style="display:none;" width="14" height="14" alt="loading...">
                  </button>
                </span>
                <input id="searchBox" name="searchBox" type="text" value="" class="form-control ui-autocomplete-input" placeholder="Where do you want to live?" autocomplete="off">
                <input id="lng" name="lng" type="hidden" value="">
                <input id="lat" name="lat" type="hidden" value="">
                <input id="within" name="within" type="hidden" value="">
                <span class="input-group-btn">
                  <button id="embeddedSearchBtn" type="submit" value="Search" class="btn btn-primary banda">
                    <span class="searchText">Search  </span>
                    <span class="searchIcon"><i class="fa fa-search" aria-hidden="true"></i></span>
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="header-tagline">
      <h2>5.0 million Tenants and Landlords <i class="fa fa-heart"></i> OpenRent</h2>
      <span>Scroll down to find out why <i class="fa fa-angle-double-down"></i></span>
    </div>
  </div>
</template>
  
<script>
export default {
    name: "appHeader",
    methods: {
      showNavMenu(e) {
        e.querySelector('.sub-nav').style.display = 'block';
      }, 
      hideNavMenu(e) {
        e.querySelector('.sub-nav').style.display = 'none';
      }
    }
};
</script>
<style scoped>
  .header {
    background-color: #56545C;
    width: 100%;
    min-height: 400px;
    background: url(../../assets/BannerImage.jpg) no-repeat left -140px;
  }
  .header .headWrapper {
    margin: 0 auto;
    max-width: 1024px;
    padding: 0 20px;
    text-align: left;
  }
  .header-logo {
    width: auto;
    min-height: 35px;
  }
  .header-logo img {
    max-height: 35px;
    position: relative;
    top: 3px;
  }
  .logo-icon img {
    max-height: 25px;
    padding-right: 5px;
    position: relative;
    top: -3px;
  }
  #about-nav {
    background: url(../../assets/aboutImg.jpg) no-repeat left center;
  }
  #price-nav {
    background: url(../../assets/PricingImg.jpg) no-repeat left center;
  }
  .large-nav-list {
    float: right;
    color: #FFF;
    padding-left: 0;
    margin: 0;
  }
  .large-nav-list > li {
    float: left;
    margin: 0;
    padding: 0;
  }
  .large-nav-list > li > a {
    color: #FFF;
    padding: 3px 15px;
    margin: 10px 0;
    display: block;
    font-size: 0.9em;
  }
  .add-listing-cta {
    margin-left: 40px !important;
  }
  .log-on-cta {
    margin-left: 5px !important;
  }
  .log-on-cta a {
    background-color: #5cb85c;
    border-radius: 4px;
  }
  .log-on-cta a:hover {
    text-decoration: none !important;
    background-color: #449d44;
  }
  a.btn-success {
    border-radius: 4px;
    background-color: #1083E5;
  }
  a.btn-success:hover {
    text-decoration: none !important;
    background-color: #3272a9;
  }
  .large-nav-list > li > a:hover {
    text-decoration: underline;
  }
  .large-nav-list li {
    list-style-type: none;
  }
  .large-nav-list li a {
    text-decoration: none;
  }
  .sub-nav {
    position: absolute;
    left: 0;
    width: 100%;
    display: none;
    z-index: 100;
  }
  .sub-nav .nav-image {
    width: 50%;
    min-height: 230px;
    float: left;
    background-color: #999;
  }
  .sub-nav ul {
    padding: 20px;
    width: calc(50% - 40px);
    float: right;
    background-color: #FFF;
    min-height: 190px;
  }
  .sub-nav .col {
    float: left;
    padding-right: 30px;
  }
  .sub-nav strong {
    color: #585858;
    float: left;
    margin-bottom: 10px;
    padding-left: 8px;
  }
  .sub-nav li {
    clear: both;
    padding-bottom: 5px;
  }
  .sub-nav a {
    font-weight: normal;
    color: #585858;
    font-size: 0.9em;
    border-left: 3px solid #FFF;
    padding-left: 5px;
  }
  .sub-nav a:hover {
    border-left: 3px solid #0B5Da3;
    text-decoration: underline;
  }
  .sub-nav ul li span {
    background-color: #EEE;
    color: #585858;
    font-size: 0.9em;
    font-style: italic;
    padding: 5px;
  }
  .header-tagline {
    float: left;
    width: 100%;
    background-color: #303441;
    color: #FFF;
    padding: 20px 0;
  }
  .header-tagline h2 {
    margin-top: 0;
    padding: 0;
  }
  .fa-heart {
    font-size: 24px;
    color: red;
  }
  .fa-check-circle {
    color: #5CB85C;
  }
  .titleBox {
    margin-top: 70px;
    color: #FFF;
    text-align: center;
  }
  #searchBox { 
    padding: 15px 20px 15px 45px;
    border-radius: 30px 0 0 30px;
    border-color: transparent;
    width: 50%;
  }
  #mylocation1 {
    border-radius: 15px;
    border-color: transparent;
    position: relative;
    left: 42px;
    top: 5px;
    cursor: pointer;
  }
  #embeddedSearchBtn {
    padding: 15px;
    background-color: #1083E5;
    color: #FFF;
    border-radius: 0 30px 30px 0;
    border-color: transparent;
    cursor: pointer;
  }
  #embeddedSearchBtn:hover {
    background-color: #3272a9;
  }
</style>