<footer>
    <div class="footer-top">
        <div class="footer-top-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="footer-logo"><a href="index.html"><img src="image/footer/footer-logo.png"
                                    alt=""></a></div>
                        <div class="footer-navigation">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Apartments</a></li>
                                <li><a href="#">Latest News</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Schedule a Tour</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="footer-bottom">
        <div class="footer-bottom-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                        <div class="footer-bottom-content wow " data-wow-delay="0.1s">
                            <h1>Our Agents</h1>
                            <div class="footer-img footer-border">
                                <div class="team-img">
                                    <img src="image/footer/agent-1.png" alt="">
                                </div>
                                <div class="team-info">
                                    <h2 class="footer-text">Ms. Tina Sophia</h2>
                                    <span>Certified Agent</span>
                                    <ul>
                                        <li><i class="icon-phone"></i><a href="">1-258-985-703</a></li>
                                        <li><i class="icon-mail-alt"></i><a href="">john@apartio.com</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="footer-img footer-space">
                                <div class="team-img">
                                    <img src="image/footer/agent-2.png" alt="">
                                </div>
                                <div class="team-info">
                                    <h2 class="footer-text">Mr. John Beans</h2>
                                    <span>Certified Agent</span>
                                    <ul>
                                        <li><i class="icon-phone"></i><a href="">1-258-985-703</a></li>
                                        <li><i class="icon-mail-alt"></i><a href="">john@apartio.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="footer-bottom-content wow" data-wow-delay="0.3s">
                            <h1>Get In Touch</h1>
                            <div class="iletisim">
                                <h2 class="footer-text">Visit Us Today:</h2>
                                <span>31 Camden Place, Highland Mills <br>
                                    NewYork 10930 - USA</span>
                            </div>
                            <div class="iletisim">
                                <h2 class="footer-text">Phone:</h2>
                                <span class="iletisim-no">
                                    <a href="">1-258-985-703</a> <br>
                                    <a href="">1-258-985-608</a>
                                </span>
                            </div>
                            <div class="iletisim">
                                <h2 class="footer-text">Email:</h2>
                                <span>
                                    <a href="mailto:logistic@email.com">info@domain.com </a>
                                </span>
                            </div>
                            <p class="footer-location"><i class="icon-location-outline"></i><a href="">Location Map</a>
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12">
                        <div class="footer-bottom-content wow" data-wow-delay="0.5s">
                            <h1>Send An Inquiry</h1>
                            <div class="footer-form">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <input type="text" class="form-control" placeholder="Your Name">
                                        </div>
                                        <div class="col-xl-6">
                                            <input type="text" class="form-control" placeholder="Phone">
                                        </div>
                                        <div class="col-xl-12">
                                            <input type="text" class="form-control" placeholder="Email address">
                                        </div>
                                        <div class="col-xl-12">
                                            <textarea name="" id="" cols="30" rows="4" class="form-control"
                                                placeholder="How We Can Help?"></textarea>
                                        </div>
                                        <div class="col-xl-12">
                                            <button class="footer-form-btn">SEND MESSAGE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-alt">
        <div class="container">
            <div class="row">
                <div class="footer-c">
                    <span>(c) 2020 All rights reserved.</span>
                    <a href="" class="footer-line">Privacy Policy</a>
                    <a href="">Booking Guide</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<button id="go-yukari" class="scroll-top">
    <span class="icon-angle-up"></span>
</button>





<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/owl.carousel.js"></script>
<script src="js/jquery.paroller.min.js"></script>
<script src="js/aos.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/fancybox.js"></script>
<script src="js/main.js"></script>

<?php
    if (!empty($active)) {
        if ($active == "about" || $active == "index") { ?>

            <script type="text/javascript">
                var observer = new IntersectionObserver(function (entries) {
                    if (entries[0]['isIntersecting'] === true) {
                        if (entries[0]['intersectionRatio'] > 0.5) {
                            $('.sayac').addClass('count');
                            $('.count').each(function () {
                                $(this).prop('Counter', 0).animate({
                                    Counter: $(this).data('count')
                                }, {
                                    duration: 5000,
                                    easing: 'swing',
                                    step: function (now) {
                                        $(this).text(Math.ceil(now));
                                    }
                                });
                            });
                        }
                    }
                }, {
                    threshold: [0, 0.5, 1]
                });

            observer.observe(document.querySelector("#konum"));
            </script>

        <?php }
    } ?>
     


</body>

</html>