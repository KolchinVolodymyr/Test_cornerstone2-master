import PageManager from '../page-manager';
import $ from 'jquery';

export default class Custom extends PageManager {

    onReady() {
        /*
        * Custom JS
        */
        var EngravingLengthID = null;//global variable
        var EngravingID = null;

        this.context.ModifierOptions.forEach(item => {
            //find an object whose name 'Engraving length'
            //assign ID to our global variable EngravingLengthID
            if(item.display_name === 'Engraving length') {
                    EngravingLengthID = item.id;
            }

            //find an object whose name 'Engraving'
            if(item.display_name === 'Engraving') {
                //listener input
                document.querySelector('[id*="attribute_text"]').addEventListener('input', function() {
                        const $productInputText = $('[id*="attribute_text"]');
                        console.log('$productInputText', $productInputText);
                        console.log('EngravingLengthID', EngravingLengthID);
                        const productInputTextValueLength = $productInputText.find('value').prevObject[0].value.length;

                          $(`#attribute_select_${EngravingLengthID} > option`).each(function() { //Run through the loop of each option
                            //this.text = <options>text</options>

                            if(this.text.indexOf(productInputTextValueLength)>=0) { //Find if the string present as substring
                                $(`#attribute_select_${EngravingLengthID} > option`).removeAttr("selected"); //Remove the existing selected option
                                $(this).attr("selected","selected"); //Select this matching option as selected
                                return false; //Return after first match is found
                               }
                            });
                    });
            }
        });


//    document.querySelector('[id*="attribute_text"]').addEventListener('input', function() {
//
//        const $productInputText = $('[id*="attribute_text"]');
//        console.log('$productInputText', $productInputText);
//        const productInputTextValueLength = $productInputText.find('value').prevObject[0].value.length;
//        //console.log('productInputTextValueLength', productInputTextValueLength);
//
//          $("#attribute_select_131 > option").each(function() { //Run through the loop of each option
//            //this.text = <options>text</options>
//            if(this.text.indexOf(productInputTextValueLength)>=0) { //Find if the string present as substring
//                $("#attribute_select_131 > option").removeAttr("selected"); //Remove the existing selected option
//                $(this).attr("selected","selected"); //Select this matching option as selected
//                return false; //Return after first match is found
//               }
//            });
//
//    });







//document.querySelector('#attribute_text_159').addEventListener('input', function(){
//    console.log('document.querySelector("#attribute_text_159").', document.querySelector('#attribute_text_159').value)
//});
//
//                    /*input validation function */
//                    function validate(e) {
//                      const regex = /[A-Za-z ,.]/;
//                      const chars = e.target.value.split('');
//                      const char = chars.pop();
//                      if (!regex.test(char)) {
//                        e.target.value = chars.join('');
//                        alert('unknown or restricted symbol');
//                      }
//                      if(chars.length > 199 ){
//                        alert('too much symbols. Please, make your text shorter');
//                      }
//                    }
//                    /* Event listener input Congratulatory inscription */
//                    document.querySelector('#attribute_text_156').addEventListener('input', validate);
//
//
//                    /* show input for a gift  */
//                    function yesnoCheck() {
//                        if (document.getElementById('yesCheck').checked) {
//                            document.getElementById('ifYes').style.display = 'block';
//                        }
//                        else document.getElementById('ifYes').style.display = 'none';
//                    }
//                    /* Event listener input */
//                    /* show input for a gift */
//                    document.querySelector('#yesCheck').addEventListener('change', yesnoCheck);
//                    /**/
//
//
//
//
//                    /**/
//                    function congratulationInscription() {
//                        if (document.getElementById('email').checked) {
//                            document.getElementById('congratulationInscriptionIfYes').style.display = 'block';
//                        }
//                        else document.getElementById('congratulationInscriptionIfYes').style.display = 'none';
//                    }
//                    /* Event listener input */
//                    /* Send a congratulation inscription via email */
//                    document.querySelector('#email').addEventListener('change', congratulationInscription);
//
//                    /* Event listener input */
//                    /* Print it on a gift card */
//                    document.querySelector('#gift').addEventListener('change', congratulationInscription);
//                    /**/
//
//
//                    document.querySelector('#сongratulatory_inscription').addEventListener('input', function() {
//                        console.log(document.querySelector('#сongratulatory_inscription').value);
//                    });



    }

}