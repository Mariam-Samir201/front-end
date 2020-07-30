import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-edittemplate1',
  templateUrl: './edittemplate1.component.html',
  styleUrls: ['./edittemplate1.component.scss'],
})
export class Edittemplate1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var alllist = $('.tool-color .collorr');
    alllist.eq(0).css('backgroundColor', '#00c3da;');
    alllist.eq(1).css('backgroundColor', '#31b164');
    alllist.eq(2).css('backgroundColor', '#37b8df');
    alllist.eq(3).css('backgroundColor', '#5d69f6');
    alllist.eq(4).css('backgroundColor', '#87ceeb');
    alllist.eq(5).css('backgroundColor', '#f2b31a');
    var toolcolorwidth = $('.tool-color').outerWidth();
    $('.tool-box').css('left', '-' + toolcolorwidth);
    $('.tool-color .collorr').click(function () {
      var color = $(this).css('backgroundColor');
      $('.yourcolor').css('color', color);
      $('.yourbgcolor').css('backgroundColor', color);
      $('.borderclr').css('borderColor', color);
      $(document).ready(function () {
        //////////////////////
        $('.font-icon').hover(
          function () {
            $(this).css('color', color);
            $(this).css('borderColor', color);
          },
          function () {
            $(this).css('color', 'black');
            $(this).css('borderColor', '#d4d4d4');
          }
        );
        /////////////////////
        $('.activee').css('backgroundColor', color);
        $('.work-a').hover(
          function () {
            $(this).css('color', 'white');
            $(this).css('backgroundColor', color);
          },
          function () {
            $(this).css('color', 'black');
            $(this).css('backgroundColor', 'white');
          }
        );
      });
      /////////////////////////
    });
    ///////////////////////////////////////////////////////

    $('.div-icon').click(function () {
      var leftbox = $('.tool-box').css('left');
      var leftboxvalue = parseInt(leftbox);
      if (leftboxvalue == 0) {
        $('.tool-box').animate({ left: '-' + toolcolorwidth }, 1000);
      } else {
        $('.tool-box').animate({ left: 0 }, 1000);
      }
    });
  }
}
