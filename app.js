function onload()
{
    document.getElementById("DatePicker").valueAsDate = new Date();
    document.getElementById("Next").disabled = true;
    document.getElementById("Current").disabled = true;
    
    actcurrseldate = new Date();

    day = actcurrseldate.getDate();
    month = actcurrseldate.getMonth() + 1;
    year = actcurrseldate.getFullYear();
    month = ("0"+month).slice(-2);
    day = ("0"+day).slice(-2);
    today = year+'-'+month+'-'+day;
    document.getElementById("DatePicker").setAttribute("max", today);
        
    doStuff();

}


function PreviousClick()
{
  currseldate = document.getElementById('DatePicker');
  actcurrseldate = new Date(currseldate.value);
  actcurrseldate.setDate(actcurrseldate.getDate()-1);
  
  CompareDates();

  doStuff();

} 

function NextClick()
{
  currseldate = document.getElementById('DatePicker');
  actcurrseldate = new Date(currseldate.value);
  actcurrseldate.setDate(actcurrseldate.getDate()+1);
 
  CompareDates();

  doStuff();

}

function FirstClick()
{
  actcurrseldate = new Date("1978-06-19");
  
  CompareDates();
  
  doStuff();

}

function CurrentClick()
{
  actcurrseldate = new Date();
  
  CompareDates();

  doStuff();
 
}


function RandomClick()
{
  start = new Date("1978-06-19");
  end = new Date();
  actcurrseldate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  CompareDates();
  
  doStuff();
 
};

function DateChange()
{
  currseldate = document.getElementById('DatePicker');
  actcurrseldate = new Date(currseldate.value);
  
  CompareDates();
  
  doStuff();
  
};

function doStuff()
{
  day = actcurrseldate.getDate();
  month = actcurrseldate.getMonth() + 1;
  year = actcurrseldate.getFullYear();
  month = ("0"+month).slice(-2);
  day = ("0"+day).slice(-2);
  formattedDate = year+"-"+month+"-"+day;
  formattedComicDate = year+"/"+month+"/"+day;
  document.getElementById('DatePicker').value = formattedDate;
  url = "https://cors.bridged.cc/https://www.gocomics.com/garfield/"+formattedComicDate;
  xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () 
  {
    if(xhr.readyState === XMLHttpRequest.DONE);
    {
      garstring = xhr.responseText;
      pos = garstring.indexOf("https://assets.amuniversal.com");
      pic = garstring.substring(pos, pos+63);
      document.getElementById("comic").src = pic;
    };
  };

  xhr.send();
;}

function CompareDates()
{
  startdate = new Date("1978/06/19");
  startdate = startdate.setHours(0,0,0,0);
  actcurrseldate = actcurrseldate.setHours(0,0,0,0);
  startdate = new Date(startdate);
  actcurrseldate = new Date(actcurrseldate);
  if (actcurrseldate.getTime() <= startdate.getTime() )
  
  {
    document.getElementById("Previous").disabled = true;
    document.getElementById("First").disabled = true;

    day = startdate.getDate();
    month = startdate.getMonth() + 1;
    year = startdate.getFullYear();
    month = ("0"+month).slice(-2);
    day = ("0"+day).slice(-2);
    startdate = year+'-'+month+'-'+day;

    document.getElementById('DatePicker').value = startdate;
    actcurrseldate = new Date("1978/06/19");
  }
  else
  {
    document.getElementById("Previous").disabled = false;
    document.getElementById("First").disabled = false;
  }
  
  enddate = new Date();
  endate = enddate.setHours(0,0,0,0);
  enddate = new Date(enddate);
  if (actcurrseldate.getTime() >= enddate.getTime())
  
  {
    document.getElementById("Next").disabled = true;
    document.getElementById("Current").disabled = true;

    day = enddate.getDate();
    month = enddate.getMonth() + 1;
    year = enddate.getFullYear();
    month = ("0"+month).slice(-2);
    day = ("0"+day).slice(-2);
    enddate = year+'-'+month+'-'+day;

    document.getElementById('DatePicker').value = enddate;
    actcurrseldate = new Date();
  }
  else
  {
    document.getElementById("Next").disabled = false;
    document.getElementById("Current").disabled = false;
  } 

 }




