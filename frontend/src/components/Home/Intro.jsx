import React from "react";

const Intro = () => {

//     <div class="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_OTRCN2adbgcOzY/view" data-text="Pay Now" data-color="#528FF0" data-size="large">
//   <script>
//     (function(){
//       var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
//       if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
//       s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
//       rzp && rzp.init && rzp.init()}})();
//   </script>
// </div>



    return (
        <div>
            <h2>This is a razor pay portal</h2>
            <p>Make your payment easy and secure.</p>

            <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_Nnp41AiZ5zpHRd" async> </script> </form>

            
        </div>
    )
}

export default Intro;