import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  pn;
  pa;
  psp;
  am;
  showurl:boolean= false;
  tn;
  paymenturl:any;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.pn)
    console.log(this.pa + this.psp)
    console.log(this.am)
    console.log(this.tn)

    var paymentStr = "upi://pay?pa=" + this.pa +
    
    "@" + this.psp +
    
    "&pn=" + this.pn +
    
    "&tn=" + this.tn +
    
    "&am=" + this.am;
    
    console.log(encodeURI(paymentStr))
    this.paymenturl =encodeURI(paymentStr);
    this.showurl= true;
    console.log('Show Url ____')
    console.log(this.showurl);
  }

  // getLink() {

  //   var paymentStr = "upi://pay?pa=" + $('#pa').val() +
    
  //   "@" + $('#psp').val() +
    
  //   "&pn=" + $('#pn').val() +
    
  //   "&tn=" + $('#tn').val() +
    
  //   "&am=" + $('#am').val();
    
  //   if ($('#am').val() !== '') {
    
  //   $('#paylink').find("span").html("Pay " + $('#pn').val() + " using UPI");
    
  //   $('#paylink').attr("href", encodeURI(paymentStr));
    
  //   $('[data-i18n = upiqrc-btn-pay]' ).text($.i18n( 'upiqrc-btn-pay', $('#pn').val() ));
    
  //   } else {
    
  //   $('#paylink').find("span").html("Pay ₹" + $('#am').val() + " to " + $('#pn').val() + " using UPI");
    
  //   $('#paylink').attr("href", encodeURI(paymentStr));
    
  //   $('[data-i18n = upiqrc-btn-pay]' ).text($.i18n( 'upiqrc-btn-pay-am', $('#pn').val(), $('#am').val() ));
    
  //   }
    
  //   $('#paylink').show();
    
  //   return paymentStr;
    
  //   }

}
