$('#maindiv').width($('#div1').width());


/* Marquee */
.marquee {
    margin: 0 auto;
    white-space: nowrap;
    box-sizing: border-box;
    background-color:#000;
    padding: 20px 0;
    text-align: center;
    font: .75em 'ATCDuel', Arial, Sans-Serif;
}

.marquee span {
    display: inline-block;
    padding-left: 100%;
    text-indent: 0;
    animation: marquee 30s linear infinite;
    color:#fff;
    font-size: 100%;
    text-transform: uppercase;
}
.marquee span:hover {
    animation-play-state: paused
}

.marquee2 span {
  animation-delay: 10s;
}

/* Links style */

.marquee a {
    color: blue;
    transition: color .5s;
    text-decoration: none;
}

.marquee a:hover{
    color: #F65314;
}


/* I like to move it move it */
@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
