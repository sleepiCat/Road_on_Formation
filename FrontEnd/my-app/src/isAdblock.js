{/* <script>
        var isAdBlockEnabled;

        (function AdBlockEnabled() {
            var ad = document.createElement('ins');
            ad.className = 'AdSense';
            ad.style.display = 'block';
            ad.style.position = 'absolute';
            ad.style.top = '-1px';
            ad.style.height = '1px';
            document.body.appendChild(ad);
            isAdBlockEnabled = !ad.clientHeight;
            document.body.removeChild(ad);

            // piano adblock detection
            window.adsblocked = isAdBlockEnabled;
            var d = new Date(); d.setTime(d.getTime() + 60 * 5 * 1000);
            document.cookie = "__adblocker=" + (isAdBlockEnabled ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";

            return isAdBlockEnabled;
        })()

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

    </script>
    <script>
    //Call 'set' before config to define mapping
    gtag('set', {
        'custom_map': {
            'dimension2': 'PageType',
            '1': 'AdsBlocked',
            'dimension3': 'SubscriberType'
        }
    });       

    gtag('config', 'UA-2396832-1', { 'AdsBlocked': isAdBlockEnabled, 'PageType': 'free', 'SubscriberType': 'free' });
</script> */}