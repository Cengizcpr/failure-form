import React from 'react';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('myMm').offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById('myMm').offsetHeight*mm;
};

const range = (start, end) => {
    return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
};


const PrintButton = ({id, label}) => (<div>
 
  <div id="myMm" style={{height: "1mm"}} />


  <div
    className="btn btn-info"
    onClick={() => {
      const input = document.getElementById(id);
      const inputHeightMm = pxToMm(input.offsetHeight);
      const a4WidthMm = 100;
      const a4HeightMm = 100; 
      const a4HeightPx = mmToPx(a4HeightMm); 
      const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;
      console.log({
        input, inputHeightMm, a4HeightMm, a4HeightPx, numPages, range: range(0, numPages), 
        comp: inputHeightMm <= a4HeightMm, inputHeightPx: input.offsetHeight
      });
      

      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          
        
          const pdf = new jsPDF('p', 'mm', [105, 148]);

          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save(`${id}.pdf`);
        });
      ;
      
      
      
    }}
  >
    {label}
  </div>
</div>);

export default PrintButton;