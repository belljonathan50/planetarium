// write to js file
const fs = require('fs')

var umap = require('C:\\Users\\bellj\\OneDrive\\Documents\\GitHub\\dev2\\sharingflucomaduo\\thisanalysis.json');
var umap2 = require('C:\\Users\\bellj\\OneDrive\\Documents\\GitHub\\dev2\\sharingflucomaduo\\thisanalysis2.json');
var arr = require('C:\\Users\\bellj\\OneDrive\\Documents\\GitHub\\dev2\\sharingflucomaduo\\times.json');
var arr2 = require('C:\\Users\\bellj\\OneDrive\\Documents\\GitHub\\dev2\\sharingflucomaduo\\times2.json');

var len = Object.keys(umap).length;
var len2 = Object.keys(umap2).length;






// const obj = JSON.parse(json);
console.log(Object.keys(umap).length);
console.log(Object.keys(umap2).length);
//  "C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\but1\\but1.patch"
//  for (var key in arr){console.log('key ' + key + ' hhhhh ' + arr[key]); console.count()}

var init = `version:181205`+  '\n' 
+ `scene_settings:{` +  '\n' 
+ `SetPlayerLimit 0 0 0 0 0 0` +  '\n' 
+ `bgcolor 0.164699995517731 0.784300029277802 0.276400029659271` +  '\n' 
+ `changefogdistance 9` +  '\n' 
+ `setMainLight 28.0099964141846 72.0500030517578 354.904998779297 1 1 1` +  '\n' 
+ `SetTempo 120` +  '\n' 
+ `SetTime 64918.1538493831` +  '\n' 
+ `SetGameMode Edit` +  '\n' 
+ `}` +  '\n' 
+ `spawn:{` +  '\n' 
+ `12345670 ghost_looper active:False isLooped:True voice:True isMuted:False isSavingTouched:True start:0 state:Empty isCasual:True  trans:[[0.1265447 1.232053 1.212519 0.5787595 -0.1267951 -0.1360202 -0.7940146]] paint:[[1 1 1]] hash:H4sIAAAAAAAACwta0nrnaxAAdJ6ZxwYAAAA=` +  '\n' 
+ `12345672 ghost_looper active:False isLooped:True voice:True isMuted:False isSavingTouched:True start:0 state:Empty isCasual:True  trans:[[-0.2931491 0.7875498 0.2808109 0.5486512 0.3626487 0.2290106 -0.7176504]] paint:[[1 1 1]] hash:H4sIAAAAAAAACzMo5Ph00hwAKCl7oAYAAAA=` +  '\n' 
+ `12345673 ghost_looper active:False isLooped:True voice:True isMuted:False isSavingTouched:True start:0 state:Empty isCasual:True  trans:[[-0.2602055 0.4895108 0.510007 0.5921202 0.1301002 0.05345676 -0.7934797]] paint:[[1 1 1]] hash:H4sIAAAAAAAAC+M4uGbWpP0Auz90ZgYAAAA=` +  '\n' 
+ `12345674 avatar_attach_head inv:True pos:0  trans:[[-0.3455042 1.523243 0.892931 0.01506371 0.408062 -0.00271513 0.9128259]] paint:[[1 1 1]] hash:H4sIAAAAAAAAC0vrdGu91gIALWSvtwYAAAA=` +  '\n' 
+ `12345675 avatar_attach inv:False pos:1  trans:[[0.04522899 1.336501 0.9782612 0.02270017 0.3729165 0.2832617 0.8832784] [-0.0529705 1.305609 0.8681705 0.02270017 0.3729165 0.2832617 0.8832784]] paint:[[1 1 1] [1 1 1]] hash:H4sIAAAAAAAAC/NKuv8h6BAA0ernygYAAAA=` +  '\n' 

+ `0 button reversed:False ~:[0|0|s] trans:[[0 0 0 -0.4214579 -0.8089172 0.3947882 -0.1103117]] paint:[[0 0 0]]`  +  '\n' 

// repere xyz

+ `15 button reversed:False ~:[1|0|s] trans:[[1 0 0 -0.3892589 -0.7997409 0.4559704 -0.03135637]] paint:[[0.1 0.1 0.1]]`  +  '\n' 
+ `16 button reversed:False ~:[2|0|s] trans:[[2 0 0 -0.2745768 -0.7668073 0.5405717 0.2107045]] paint:[[0.2 0.2 0.2]]`  +  '\n' 
+ `17 button reversed:False ~:[3|0|s] trans:[[3 0 0 -0.1388341 -0.7327206 0.5845181 0.3196627]] paint:[[0.3 0.3 0.3 ]] ` +  '\n' 
+ `88 button reversed:False ~:[4|0|s] trans:[[4 0 0 -0.02849757 -0.6960354 0.5954531 0.4001978]] paint:[[0.4 0.4 0.4]] ` +  '\n' 
+ `1 button reversed:False ~:[5|0|s] trans:[[5 0 0 -0.3892589 -0.7997409 0.4559704 -0.03135637]] paint:[[0.5 0.5 0.5]]`  +  '\n' 
+ `96 button reversed:False ~:[6|0|s] trans:[[6 0 0 -0.2745768 -0.7668073 0.5405717 0.2107045]] paint:[[0.6 0.6 0.6]]`  +  '\n' 
+ `797 button reversed:False ~:[7|0|s] trans:[[7 0 0 -0.1388341 -0.7327206 0.5845181 0.3196627]] paint:[[0.7 0.7 0.7]] ` +  '\n' 
+ `978 button reversed:False ~:[8|0|s] trans:[[8 0 0 -0.02849757 -0.6960354 0.5954531 0.4001978]] paint:[[0.8 0.8 0.8]] ` +  '\n' 
+ `928 button reversed:False ~:[8|0|s] trans:[[8 0 0 -0.02849757 -0.6960354 0.5954531 0.4001978]] paint:[[0.9 0.9 0.9]] ` +  '\n' 

+ `12 button reversed:False ~:[1|0|s] trans:[[0 1 0 -0.3892589 -0.7997409 0.4559704 -0.03135637]] paint:[[0 0 0]]`  +  '\n' 
+ `1 button reversed:False ~:[2|0|s] trans:[[0 2 0 -0.2745768 -0.7668073 0.5405717 0.2107045]] paint:[[0 0 0]]`  +  '\n' 
+ `187 button reversed:False ~:[3|0|s] trans:[[0 3 0 -0.1388341 -0.7327206 0.5845181 0.3196627]] paint:[[0 0 0]] ` +  '\n' 
+ `128 button reversed:False ~:[4|0|s] trans:[[0 4 0 -0.02849757 -0.6960354 0.5954531 0.4001978]] paint:[[0 0 0]]`  +  '\n' 
+ `195 button reversed:False ~:[5|0|s] trans:[[0 5 0 -0.3892589 -0.7997409 0.4559704 -0.03135637]] paint:[[0 0 0]]`  +  '\n' 
+ `196 button reversed:False ~:[6|0|s] trans:[[0 6 0 -0.2745768 -0.7668073 0.5405717 0.2107045]] paint:[[0 0 0]]`  +  '\n' 
+ `17 button reversed:False ~:[7|0|s] trans:[[0 7 0 -0.1388341 -0.7327206 0.5845181 0.3196627]] paint:[[0 0 0]]`  +  '\n' 
+ `1938 button reversed:False ~:[8|0|s] trans:[[0 8 0 -0.02849757 -0.6960354 0.5954531 0.4001978]] paint:[[0 0 0]]`  +  '\n' 
+ `317 button reversed:False ~:[9|0|s] trans:[[0 9 0 -0.1388341 -0.7327206 0.5845181 0.3196627]] paint:[[0 0 0]]`  +  '\n' 
+ `1398 button reversed:False ~:[10|0|s] trans:[[0 10 0 -0.02849757 -0.6960354 0.5954531 0.4001978]] paint:[[0 0 0]]`  +  '\n' 

+ `15 button reversed:False ~:[1|0|s] trans:[[0 0 1  -0.3892589 -0.7997409 0.4559704 -0.03135637]] paint:[[1 1 1]]`  +  '\n' 
+ `286 button reversed:False ~:[2|0|s] trans:[[0 0 2  -0.2745768 -0.7668073 0.5405717 0.2107045]] paint:[[1 1 1]] ` +  '\n' 
+ `87 button reversed:False ~:[3|0|s] trans:[[0 0 3  -0.1388341 -0.7327206 0.5845181 0.3196627]] paint:[[1 1 1]] ` +  '\n' 
+ `288 button reversed:False ~:[4|0|s] trans:[[0 0 4  -0.02849757 -0.6960354 0.5954531 0.4001978]] paint:[[1 1 1]] ` +  '\n' 
+ `195 button reversed:False ~:[5|0|s] trans:[[0 0 5  -0.3892589 -0.7997409 0.4559704 -0.03135637]] paint:[[1 1 1]]`  +  '\n' 
+ `826 button reversed:False ~:[6|0|s] trans:[[0 0 6  -0.2745768 -0.7668073 0.5405717 0.2107045]] paint:[[1 1 1]]`  +  '\n' 
+ `127 button reversed:False ~:[7|0|s] trans:[[0 0 7  -0.1388341 -0.7327206 0.5845181 0.3196627]] paint:[[1 1 1]]`  +  '\n' 
+ `128 button reversed:False ~:[8|0|s] trans:[[0 0 8  -0.02849757 -0.6960354 0.5954531 0.4001978]] paint:[[1 1 1]]`  +  '\n'
+ `7127 button reversed:False ~:[9|0|s] trans:[[0 0 9  -0.1388341 -0.7327206 0.5845181 0.3196627]] paint:[[1 1 1]]`  +  '\n' 
+ `7128 button reversed:False ~:[10|0|s] trans:[[0 0 10  -0.02849757 -0.6960354 0.5954531 0.4001978]] paint:[[1 1 1]]`  +  '\n' +  '\n'

 /*
 ecrire un aarray de dates
*/

let myarrstarts = [];
var i = 2000;
for (var startkey in arr){
  var toy1 = arr[startkey];
  myarrstarts.push( i +':'+ toy1[3]);
  i++;
  };
  let starts = myarrstarts.join(" ");

  let myarrends = [];
  var i = 2000;
  for (var endkey in arr){
    var toy2 = arr[endkey];
    myarrends.push( (i -1) +':'+ toy2[3]);
    i++;
    };
   myarrends.shift();
    let ends = myarrends.join(" ");



    let myarrstarts2 = [];
    var i = 3000;
    for (var startkey2 in arr2){
      var toy3 = arr2[startkey2];
      myarrstarts2.push( i +':'+ toy3[3]);
      i++;
      };
      let starts2 = myarrstarts2.join(" ");
    
      let myarrends2 = [];
      var i = 3000;
      for (var endkey2 in arr2){
        var toy4 = arr2[endkey2];
        myarrends2.push( (i -1) +':'+ toy4[3]);
        i++;
        };
       myarrends2.shift();
        let ends2 = myarrends2.join(" ");


fs.writeFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", init, err => {
  if (err) {
    console.error(err)
    return
  }
})
 


fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", 


'26046 bubble openProgress:1 quantize:True outsideBooperPos:[2.64688 1.3667 -0.6296813] beginTime:19 endTime:23 isPlaying:False playbackPosition:1.269334 src:"C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\ContentLibrary\\6202da127343f226befc487e\\Samples\\buni.ogg" ~:[1|0|f 2|0|f] trans:[[0 0.2175066 1 -0.05883022 0.129407 0.01102197 -0.9897835]] paint:[[1 1 1]]'+   '\n' +        
'260419 data_array values:[' + starts + '] writeIndex:4  trans:[[1.90679 1.299619 -0.09488323 0.008083908 -0.6048945 -0.01334044 -0.7961529]] paint:[[1 1 1]] hash:H4sIAAAAAAAAC/vL9nbuoXIA0b39cQYAAAA='+   '\n' + 
'260436 data_array values:[' + ends + '] writeIndex:4  trans:[[1.971346 1.248163 -0.4172147 -0.02525944 -0.5906887 -0.05019647 -0.8049405]] paint:[[0.3185793 0.66975 0.2265708]] hash:H4sIAAAAAAAAC/vL9nbuoXIA0b39cQYAAAA= '+   '\n' +  '\n' +  


'260420 button reversed:False ~:[1|0|s] trans:[[2.149641 1.615414 -0.4868272 -0.3938389 -0.5700855 -0.5971349 0.404133]] paint:[[0.3227398 0.8093219 0.7895375]] hash:H4sIAAAAAAAACysTFXuy5joAIJMlBQYAAAA= '+   '\n' +  

'260426 get reversed:False ~:[19|-1|s] trans:[[2.172092 1.30999 0.03535074 0.4038765 -0.3933678 0.5675406 0.600036]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC0sz1tVqkgIA1Di7GgYAAAA= '+   '\n' +  
'260434 pass_out  trans:[[1.921961 1.47397 -0.1253536 0.4408557 0.3337027 -0.5728297 -0.6051074]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC5sTJPdiUzQAwg7IpAYAAAA= '+   '\n' +  
'260435 get reversed:False ~:[23|-1|s] trans:[[2.234153 1.220393 -0.3334389 0.2888637 -0.3882962 0.5574405 0.6745694]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC0sz1tVqkgIA1Di7GgYAAAA= '+   '\n' +  
'260443 wireless_in_jolt ti:["start"] ti_settings:[[True 0.432 514]] trans:[[2.639156 1.476087 -0.5441042 -0.04731696 -0.3378721 -0.1099469 -0.9335499]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC3MK+FKxbxYAe4Q78gYAAAA= '+   '\n' +  
'260440 wireless_out_jolt ti:["end"] ti_settings:[[True 0.432 514]] trans:[[2.233211 1.325884 -0.4471073 0.09416628 -0.9742293 -0.2002475 0.04371512]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC2uyetjI0A0AFbl1/QYAAAA= '+   '\n' +  
'260437 wireless_out_jolt ti:["start"] ti_settings:[[True 0.432 514]] trans:[[2.067595 1.301124 -0.1393539 0.07662746 -0.9807632 -0.1521539 -0.0952945]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC2uyetjI0A0AFbl1/QYAAAA=' +   '\n' +  
'260441 wireless_in_jolt ti:["end"] ti_settings:[[True 0.432 514]] trans:[[2.826194 1.515219 -0.6508758 -0.0751483 -0.4250237 -0.07786317 -0.8986907]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC3MK+FKxbxYAe4Q78gYAAAA= '+   '\n' +  
'260445 button reversed:False ~:[4|0|s] trans:[[2.641346 1.214762 -0.7358007 -0.5188805 -0.7078217 -0.1668281 0.449355]] paint:[[0.3227398 0.8093219 0.7895375]] hash:H4sIAAAAAAAACysTFXuy5joAIJMlBQYAAAA= ' + '\n' +  '\n' +  





'27046 bubble openProgress:1 quantize:True outsideBooperPos:[2.64688 1.3667 -2.6296813] beginTime:19 endTime:23 isPlaying:False playbackPosition:1.269334 src:"C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\ContentLibrary\\6202da127343f226befc487e\\Samples\\son15qwerty.ogg" ~:[1|0|f 2|0|f] trans:[[2 0.2175066 1 0.07510669 0.9922858 0.08470508 -0.05052537]] paint:[[1 1 1]] hash:H4sIAAAAAAAAC7v4IaGz0BYA3u0amwYAAAA= ' + '\n' +
'270419 data_array values:[' + starts2 + '] writeIndex:4  trans:[[1.630134 1.558707 -2.436994 -0.09279878 -0.7495549 -0.02175179 -0.655044]] paint:[[1 1 1]] hash:H4sIAAAAAAAAC/vL9nbuoXIA0b39cQYAAAA= ' + '\n' +
'270436 data_array values:[' + ends2 + '] writeIndex:4  trans:[[1.805979 1.444943 -2.178442 -0.1326951 -0.7326643 -0.04929221 -0.6657066]] paint:[[0.3185793 0.66975 0.2265708]] hash:H4sIAAAAAAAAC/vL9nbuoXIA0b39cQYAAAA= ' + '\n' +
'270420 button reversed:False ~:[1|0|s] trans:[[2.046076 1.779725 -2.136217 -0.5016552 -0.4036319 -0.5709549 0.5093465]] paint:[[0.3227398 0.8093219 0.7895375]] hash:H4sIAAAAAAAACysTFXuy5joAIJMlBQYAAAA= ' + '\n' +
'270426 get reversed:False ~:[19|-1|s] trans:[[1.850797 1.560821 -2.59618 0.5364847 -0.3305297 0.4069261 0.6613211]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC0sz1tVqkgIA1Di7GgYAAAA= ' + '\n' +
'270431 button reversed:False ~:[2|0|s] trans:[[2.15277 1.8227 -2.195613 -0.6117539 -0.3513735 -0.5696052 0.4217153]] paint:[[0.3227398 0.8093219 0.7895375]] hash:H4sIAAAAAAAACysTFXuy5joAIJMlBQYAAAA= ' + '\n' +
'270432 button reversed:False ~:[3|0|s] trans:[[2.273998 1.833369 -2.227868 -0.7360981 -0.2933848 -0.4969409 0.3537441]] paint:[[0.3227398 0.8093219 0.7895375]] hash:H4sIAAAAAAAACysTFXuy5joAIJMlBQYAAAA= ' + '\n' +
'270433 button reversed:False ~:[4|0|s] trans:[[2.405537 1.780935 -2.23689 -0.8203658 -0.219478 -0.4491262 0.277696]] paint:[[0.3227398 0.8093219 0.7895375]] hash:H4sIAAAAAAAACysTFXuy5joAIJMlBQYAAAA= ' + '\n' +

'270434 pass_out  trans:[[1.462814 0.481431 -1.262489 0.4408557 0.3337027 -0.5728297 -0.6051074]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC5sTJPdiUzQAwg7IpAYAAAA= '+   '\n' +  
'270435 get reversed:False ~:[23|-1|s] trans:[[2.009784 1.414245 -2.363856 0.4287787 -0.3035384 0.4167314 0.7418546]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC0sz1tVqkgIA1Di7GgYAAAA= ' + '\n' +
'270443 wireless_in_jolt ti:["start2"] ti_settings:[[True 0.432 514]] trans:[[2.495697 1.597787 -2.300707 -0.16329 -0.506175 -0.07535112 -0.8434723]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC3MK+FKxbxYAe4Q78gYAAAA= ' + '\n' +
'270440 wireless_out_jolt ti:["end2"] ti_settings:[[True 0.432 514]] trans:[[2.067187 1.497066 -2.245977 0.002690018 -0.9290776 -0.296706 0.2208467]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC2uyetjI0A0AFbl1/QYAAAA= ' + '\n' +
'270437 wireless_out_jolt ti:["start2"] ti_settings:[[True 0.432 514]] trans:[[1.794216 1.540629 -2.461251 -0.01648444 -0.9665359 -0.2393842 0.09072988]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC2uyetjI0A0AFbl1/QYAAAA= ' + '\n' +
'270441 wireless_in_jolt ti:["end2"] ti_settings:[[True 0.432 514]] trans:[[2.245492 0.5847454 0.8781513 -0.06285948 -0.07496241 -0.2349765 -0.9670654]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC3MK+FKxbxYAe4Q78gYAAAA= ' + '\n' +
'270445 button reversed:False ~:[4|0|s] trans:[[2.535453 1.30644 -2.164401 -0.5402671 -0.5574433 -0.1401536 0.6145937]] paint:[[0.3227398 0.8093219 0.7895375]] hash:H4sIAAAAAAAACysTFXuy5joAIJMlBQYAAAA= ' + '\n'  + '\n' +








'878787 add_jolt reversed:False ~:[0|3|s] trans:[[1.948183 1.369117 -0.25234 -0.116257 -0.6623299 -0.04559211 -0.7387319]] paint:[[0 0 0]] ' +  '\n' 



, err => {
  if (err) {
    console.error(err)
    return
  }
})

fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", 
'8 wireless_in_jolt ti:["route2"] ti_settings:[[True 0.432 514]] trans:[[1.719568 1.716066 -2.302918 0.01771531 -0.2851903 -0.04583572 -0.9572104]] paint:[[0 0 0]] hash:H4sIAAAAAAAAC3MK+FKxbxYAe4Q78gYAAAA= '
, err => {
  if (err) {
    console.error(err)
    return
  }
})





// build data points
var i = 2000;

for (index = 0; index < len; index++){
  content = (index + 2000) + ' button reversed:False ~:['+  (index + 2000)  +    '|0|s] trans:[[' 
  + umap[index][0] + ' '      +  umap[index][1] + ' ' + 
  
  umap[index][2] + 
/*   ((arr[index][1] + 50 )/50 ) +  */
  
  
  ' ' +  ' 1 1 0 0]] paint:[[  1 ' + 4 + ' 0  ]]   ' +  '\n';
  fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", content, err => {
    if (err) {
      console.error(err)
      return
    }
  });
}

var i = 3000;

for (index2 = 0; index2 < len2; index2++){
  content2 = (index2 + 3000) + ' button reversed:False ~:['+  (index2 + 3000)  +    '|0|s] trans:[[' 
  + umap2[index2][0] + ' '   +  umap2[index2][1] +  ' '   +  

  umap2[index2][2] + 
/*    ((arr2[index2][1] + 50 )/100 ) +  */
   
   ' '   +  '      -0.07163983 -0.1179295 -0.6771695 -0.7227738 ]] paint:[[  0 0 1  ]]   ' +  '\n';
  fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", content2, err => {
    if (err) {
      console.error(err)
      return
    }
  });
}






fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch",   
'123450 execute ~:[0|0|s 0|0|s 0|0|s 0|0|s] ti:["port_in 8050"] trans:[[12.29629 3.777905 4.82953 0.1625242 -0.8728614 0.05945917 -0.4562493]] paint:[[0.990566 0.990566 0.990566]] '     +  '\n' +
'123451 wireless_in_jolt ti:["onload"] trans:[[12.52742 3.829006 4.350072 -0.1995301 -0.6630118 -0.0280121 -0.7209844]] paint:[[0 0 0]]'  +  '\n' +
'123452 execute ~:[0|0|s 0|0|s 0|0|s 0|0|s] ti:["port_out 8051"] trans:[[12.2004 3.729555 4.638988 0.08595751 -0.9130043 -0.0005207211 -0.398791]] paint:[[0.990566 0.990566 0.990566]]'  +  '\n' + 
'123453 execute ~:[0|0|s 0|0|s 0|0|s 0|0|s] ti:["remote_ip  192.168.1.178"] trans:[[12.08632 3.548022 4.452451 -0.01409523 -0.913823 -0.005449386 -0.4058315]] paint:[[0.990566 0.990566 0.990566]]'
, err => {
  if (err) {
    console.error(err)
    return
  }
});







var mid = `}`+  '\n' 
+ `connections:{` +  '\n' 
;
fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", mid, err => {
  if (err) {
    console.error(err)
    return
  }
});



 var len = Object.keys(umap).length;

for (ind = 0; ind < len; ind++){
  connect = (ind + 2000) + " ':[[[260434 0]]]" + '\n' ;
  fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", connect, err => {
    if (err) {
      console.error(err)
      return
    }
  });
};   

 var len2 = Object.keys(umap2).length;

for (ind2 = 0; ind2 < len2; ind2++){
  connect = (ind2 + 3000) + " ':[[[270434 0]]]" + '\n' ;
  fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", connect, err => {
    if (err) {
      console.error(err)
      return
    }
  });
};   


/*   var j = 3000;
for (var key in arr2){
  connect2 = j + " ':[[[91 0]]]" + '\n' ;
  fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", connect2, err => {
    if (err) {
      console.error(err)
      return
    }
  });
  j++;
};  */  

fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", 
1231234 + " ':[[[1231235 0]]]" + '\n' +
2342345 + " ':[[[2342346 0]]]" + '\n'
, err => {
  if (err) {
    console.error(err)
    return
  }
});



fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", 
1231235 + " ':[[[1231236 0]]]" + '\n' +
2342346 + " ':[[[2342347 0]]]" + '\n' +
26046 + " ':[[] [] [[260415 2]]]" + '\n' +
260415 + " ':[[[26046 6]]]" + '\n' +
260419 + " ':[[[260426 1] [260437 0]]]" + '\n' +
260434 + " ':[[[878787 0]]]" + '\n' +
27046 + " ':[[] [] [[270415 1]]]" + '\n' +
270415 + "  ':[[[27046 6]]]" + '\n' +
878787   + " ':[[[260419 0] [260436 0]]]" + '\n' +
260436 + " ':[[[260435 1] [260440 0]]]" + '\n' +
260443 + " ':[[[26046 4] [26046 6]]]" + '\n' +
260441 + " ':[[[26046 5]]]" + '\n' +
260445 + " ':[[[26046 7]]]" + '\n' +
270419 + "  ':[[[270426 1] [270437 0]]]"+ '\n' +
270436 + "   ':[[[270440 0] [270435 1]]]"+ '\n' +
270434 + "   ':[[[270436 0] [270419 0]]]"+
270441 + " ':[[[27046 5]]]"+ '\n' +
270443 + " ':[[[27046 4] [27046 6]]]"+ '\n' +
270434 + " ':[[[270436 0] [270419 0]]]" + '\n'+
270441 + " ':[[[27046 5]]]" + '\n'

, err => {
  if (err) {
    console.error(err)
    return
  }
});











fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", 
123451 + " ':[[[123452 0] [123453 0] [123450 0]]]"+ '\n' 
, err => {
  if (err) {
    console.error(err)
    return
  }
})

var end =  `}` +  '\n' 

;

fs.appendFileSync("C:\\Users\\bellj\\OneDrive\\Documents\\Patch\\SavedWorlds\\splitin2\\splitin2.patch", end, err => {
  if (err) {
    console.error(err)
    return
  }
})


 

