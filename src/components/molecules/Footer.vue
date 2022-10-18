<template>
  <div class="footer">
    <div class="footerWrapper">
      <div class="menu">
        <h3>Popular searches</h3>
        <ul>
          <li><a href="/landlords-advertise-property-for-rent-on-rightmove-and-zoopla">Landlords</a></li>
          <li><a href="/find-property-to-rent-from-private-landlords">Tenants</a></li>
          <li><a href="/find-flats-and-houses-for-rent-online">Search Houses for Rent</a></li>
          <li><a href="/properties-to-rent/london">Properties in London</a></li>
          <li><a href="/search-for-properties-to-rent">Properties in the UK</a></li>
        </ul>
      </div>
      <div class="menu">
        <h3>Quick links</h3>
        <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/kb">Help Centre</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/affiliate">Affiliates</a></li>
            <li><a href="/testimonials-and-reviews-from-private-landlords">Testimonials</a></li>
            <li><a href="/press">Press</a></li>
            <li><a href="/jobs">Jobs</a></li>
        </ul>
      </div>
      <p class="address">Ask Question - OpenRent Office 34, 67-68 Hatton Garden London, EC1N 8JY, United Kingdom</p>
      <div class="bottom-footer">
        <div class="social-links">
          <ul class="social-new">
            <li><a href="https://facebook.com/OpenRent" target="_blank" onclick="ga('send', 'event', 'Social Link', 'Click', 'Footer Facebook')"><i class="fa fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/OpenRent" target="_blank" onclick="ga('send', 'event', 'Social Link', 'Click', 'Footer Twitter')"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/openrent_uk/" target="_blank" onclick="ga('send', 'event', 'Social Link', 'Click', 'Footer Instagram')"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
        <p class="copyright">© 2012 - 2022 OpenRent Ltd.</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
    name: "appFooter",
};
</script>
<style scoped>
  .footer {
    width: 100%;
    min-height: 50px;
    background-color: #303441;
    color: #FFF;
    font-size: 0.8em;
    float: left;
  }
  .footer .footerWrapper {
    margin: 0 auto;
    max-width: 1024px;
    text-align: left;
    padding: 20px 0;
  }
  .footer .footerWrapper ul {
    padding-left: 0;
  }
  .footer .footerWrapper ul li{
    list-style-type: none;
  }
  .footer .footerWrapper ul li a {
    color: #FFF;
    text-decoration: none;
  }
  .footer .footerWrapper ul li a:hover {
    text-decoration: underline;
  }
  .menu {
    width: 20%;
    float: left;
  }
  .address {
    float: left;
    clear: both;
    margin-top: 50px;
  }
  .bottom-footer {
    float: left;
    clear: both;
    width: 60%;
    border-top: 1px solid #FFF;
  }
  .social-links {
    float: left;
    width: 50%;
  }
  .copyright {
    float: right;
    width: 50%;
    text-align: right;
  }
  .social-new li {
    float: left;
    margin-right: 15px;
  }
</style>