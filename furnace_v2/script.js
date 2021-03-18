const form = document.getElementById('form');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
const line5 = document.getElementById('line5');
const line6 = document.getElementById('line6');
const line7 = document.getElementById('line7');

const updateR2 = () => {
  line1.attributes[2].value = radius2.value * 400;
  line2.attributes[2].value = line1.attributes[2].value;
  line2.attributes[0].value = line1.attributes[2].value;
  line3.attributes[0].value = line1.attributes[2].value;
};

const updateR1 = () => {
  line3.attributes[2].value = radius1.value * 400;
  line4.attributes[0].value = line3.attributes[2].value;
  line4.attributes[2].value = line3.attributes[2].value;
  line5.attributes[0].value = line3.attributes[2].value;
};

const updateR0 = () => {
  line5.attributes[2].value = radius0.value * 400;
  line6.attributes[0].value = line5.attributes[2].value;
  line6.attributes[2].value = line5.attributes[2].value;
  line7.attributes[0].value = line5.attributes[2].value;
};

const updateH4 = () => {
  line2.attributes[3].value = height4.value * 400;
  line3.attributes[1].value = line2.attributes[3].value;
};

const updateH3 = () => {
  line3.attributes[3].value = parseFloat(height3.value) * 400;
  line4.attributes[1].value = line3.attributes[3].value;
  line4.attributes[3].value =
    parseFloat(line3.attributes[3].value) + parseFloat(height2.value) * 400;
  line5.attributes[1].value = line4.attributes[3].value;
  line5.attributes[3].value =
    parseFloat(line4.attributes[3].value) + parseFloat(height1.value) * 400;
  line6.attributes[1].value = line5.attributes[3].value;
  line6.attributes[3].value =
    parseFloat(line5.attributes[3].value) + parseFloat(height0.value) * 400;
  line7.attributes[1].value = line6.attributes[3].value;
  line7.attributes[3].value = line6.attributes[3].value;
};

const updateH2 = () => {
  line4.attributes[3].value = (parseFloat(height3.value) + parseFloat(height2.value)) * 400;
  line5.attributes[1].value = line4.attributes[3].value;
  line5.attributes[3].value =
    parseFloat(line4.attributes[3].value) + parseFloat(height1.value) * 400;
  line6.attributes[1].value = line5.attributes[3].value;
  line6.attributes[3].value =
    parseFloat(line5.attributes[3].value) + parseFloat(height0.value) * 400;
  line7.attributes[1].value = line6.attributes[3].value;
  line7.attributes[3].value = line6.attributes[3].value;
};

const updateH1 = () => {
  line5.attributes[3].value =
    (parseFloat(height3.value) + parseFloat(height2.value) + parseFloat(height1.value)) * 400;
  line6.attributes[1].value = line5.attributes[3].value;
  line6.attributes[3].value =
    parseFloat(line5.attributes[3].value) + parseFloat(height0.value) * 400;
  line7.attributes[1].value = line6.attributes[3].value;
  line7.attributes[3].value = line6.attributes[3].value;
};

const updateH0 = () => {
  line6.attributes[3].value =
    (parseFloat(height3.value) +
      parseFloat(height2.value) +
      parseFloat(height1.value) +
      parseFloat(height0.value)) *
    400;
  line7.attributes[1].value = line6.attributes[3].value;
  line7.attributes[3].value = line6.attributes[3].value;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = `${height4.value}, ${radius2.value}, ${throatX.value}, ${throatY.value} \n${height3.value}, ${radius1.value}, ${shaftX.value}, ${shaftY.value} \n${height2.value}, ${bellyX.value}, ${bellyY.value} \n${height1.value}, ${radius0.value}, ${boshX.value}, ${boshY.value} \n${height0.value}, ${hearthX.value}, ${hearthY.value}`;
  // console.log(data);

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'Inputscript.inp'; // The file to save the data.

  let newLink = document.createElement('a');
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  } else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = 'none';
    document.body.appendChild(newLink);
  }

  newLink.click();
});
