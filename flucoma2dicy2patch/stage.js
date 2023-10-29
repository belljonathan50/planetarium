const fs = require('fs');
const path = require('path');

const name = "TNMS";

// Get the absolute path to the directory where the script is located
const scriptDirectory = __dirname;

// Read values from values.txt file
const valuesData = fs.readFileSync('values.txt', 'utf8').split(/\s+/);
const dataValues = valuesData.map(value => parseFloat(value.trim())); // Parse the values as numbers

// Read values from times.json file
const timesData = JSON.parse(fs.readFileSync(path.join(scriptDirectory, 'times.json'), 'utf8'));

// Extract the third values from each object in the timesData object
const timesArray = Object.values(timesData).map(value => value[3].toFixed(2));

// Generate data_array values with index and colon format for both values and times arrays
const dataArrayValues = dataValues.map((value, index) => `${index}:${value}`).join(' ');
const timesArrayValues = timesArray.map((value, index) => `${index}:${value}`).join(' ');



const data = {
  version: 231002, // Default version
  // Add other properties as needed
};

const patchContent = `version:${data.version}
scene_settings:{
  
SetPlayerLimit 0 0 0 0 0 0
bgcolor 0.7647 0.7843 0.7764
changefogdistance 9
setMainLight 28.01 72.05 354.905 1 1 1
TimelinePlay
TimelineLoop true
TimelineLength 16
SetPlayerHeadPosition -0.5186296 1.249228 0.1915207 0.1099995 0.2885177 0.06053273 0.9492068
SetTempo 120
SetTime 7.921847288
SetGameMode Edit
SetMetronomeEnabled False
SetSceneBounciness 0.5 0.5 0.5
}
spawn:{
0 avatar_attach_head inv:True pos:0 trans:[[-0.5186296 1.249228 0.1915207 0.1099995 0.2885177 0.06053273 0.9492068]] paint:[[1 1 1]] hash:H4sIAAAAAAAAA8tjl+sQWwoAvZvY1AYAAAA= 
1 avatar_attach inv:False pos:1 trans:[[-0.2437646 1.120627 0.373958 0.02550385 0.1358424 0.3342726 0.9322866 2.517885 2.517888 2.517887] [-0.2807178 1.109383 0.2282678 0.02550385 0.1358424 0.3342726 0.9322866]] paint:[[1 1 1] [1 1 1]] hash:H4sIAAAAAAAAA0urelIVZwYAIGv0NwYAAAA= 
2 avatar_attach inv:False pos:2 trans:[[-0.5637864 1.2251 0.6047799 -0.2781266 0.1840266 -0.2521992 0.9083917 -2.517885 2.517888 2.517887] [-0.6374352 1.158602 0.4913279 -0.2781266 0.1840266 -0.2521992 0.9083917]] paint:[[1 1 1] [1 1 1]] hash:H4sIAAAAAAAAAztx6JxtVjUArkJIPQYAAAA= 



1943509176 data_array values:[${dataArrayValues}] writeIndex:2 trans:[[0.24095 1.294997 0.3629052 0.1953099 -0.7381586 0.0864887 -0.6399184]] paint:[[1 1 1]] hash:H4sIAAAAAAAAA3vvsvBu/Q0AoRGKqwYAAAA= 

453402114 txt width:0.245 height:0.047 fontsize:120 align:Center style:Normal canvasMode:Text_control_canvas overflow:Overflow bg:True ti:["this is ${name}"] ti_settings:[[True 0.432 514]]  trans:[[0.3082265 1.202348 0.3233958 -0.07872692 -0.1634425 -0.0383227 -0.9826596]] paint:[[0 0 0]] #:[text-font-size-custom] hash:H4sIAAAAAAAAA0t7pLXnRBIAR8wvngYAAAA= 
1836604290 readout value:33 numDecimals:2 bg:True fontsize:0.432 ~:[33|0|s] ti:["33.00"] ti_settings:[[True 0.432 514]] _hideJoltsIns:True  trans:[[0.4621531 1.304384 0.3240345 -0.04978645 -0.7941371 -0.07673948 -0.6008151]] paint:[[1 1 1]] hash:H4sIAAAAAAAAAzO03jNBsRAAp+E/qQYAAAA= 
499483651 readout value:48.15 numDecimals:2 bg:True fontsize:0.432 ~:[48.15|0|s] ti:["48.15"] ti_settings:[[True 0.432 514]] _hideJoltsIns:True  trans:[[0.9504825 1.829124 0.1334832 0.1685037 -0.8889593 0.08801977 -0.4166658]] paint:[[1 1 1]] hash:H4sIAAAAAAAAAzO03jNBsRAAp+E/qQYAAAA= 
485043739 speaker distance:10 stereoSpatialMix:1 id:"8A21662A" ~:[0|-1|s]  trans:[[1.041229 2.637863 -0.7194565 0.8361886 -0.513052 0.1881555 -0.04651685]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA+tLy8ibMAUAZ7LyuQYAAAA= 
765622439 readout value:50.76 numDecimals:2 bg:True fontsize:0.432 ~:[50.76|0|s] ti:["50.76"] ti_settings:[[True 0.432 514]] _hideJoltsIns:True  trans:[[1.229557 1.964583 0.2956756 0.1599416 -0.9437734 0.08800639 -0.2756181]] paint:[[1 1 1]] hash:H4sIAAAAAAAAAzO03jNBsRAAp+E/qQYAAAA= 

1556175680 data_array values:[${timesArrayValues}] writeIndex:2 trans:[[0.74095 1.794997 0.3629052 0.1953099 -0.7381586 0.0864887 -0.6399184]] paint:[[1 1 1]] hash:H4sIAAAAAAAAA3vvsvBu/Q0AoRGKqwYAAAA= 


969520966 add_jolt reversed:False ~:[1|0|s]  trans:[[0.5483904 1.946915 0.01908174 0.5767399 -0.1103065 0.0376442 -0.8085706]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA+Pt21EvtwMA9/EalQYAAAA= 
2017391141 order count:3 state:33   trans:[[0.5585009 2.082882 -0.01156487 0.3191187 -0.4767476 -0.6579332 -0.4878514]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAAzvp8P66nzEA0McmCAYAAAA= 
1720390403 counter state:59   trans:[[-0.0767985 1.633483 -0.144482 -0.01697578 -0.9736429 0.04701868 -0.2225326]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAAwvhjMiVsgEAUXA5+gYAAAA= _collideWhenHidden:False 
1522802494 readout value:58 numDecimals:2 bg:True fontsize:0.432 ~:[58|0|s] ti:["58.00"] ti_settings:[[True 0.432 514]] _hideJoltsIns:True  trans:[[0.2198454 1.655356 -0.05774543 0.2301439 -0.5902176 0.2311583 -0.7384056]] paint:[[1 1 1]] hash:H4sIAAAAAAAAAzO03jNBsRAAp+E/qQYAAAA= 
352804140 value k_k_value:[1|0|s]   trans:[[-0.1525333 1.743136 -0.331639 0.5154375 -0.2158764 0.188772 -0.8075188]] paint:[[0.6037736 0.2574615 0.05980776]] hash:H4sIAAAAAAAAA5OtfsFqGg0AzoAAywYAAAA= _collideWhenHidden:False 

782678884 data_array values:[${timesArrayValues}] writeIndex:2 trans:[[1 2 0.3629052 0.1953099 -0.7381586 0.0864887 -0.6399184]] paint:[[1 1 1]] hash:H4sIAAAAAAAAA3vvsvBu/Q0AoRGKqwYAAAA= 

447031804 bubble_player fadeDuration:0.00499999988824129 begin:27.57 end:30.12 receptacleFollowsMainPart:True showReceptacleWhenObjectHidden:False  ~:[0.7|-1|s 1|-1|s 0|1|s]  trans:[[0.643096 2.009994 -0.5664752 0.6535919 -0.6463698 0.1636909 -0.3580911] [0.493367 1.95326 -0.4138573 0.6535919 -0.6463698 0.1636909 -0.3580911]] paint:[[1 1 1] [1 1 1]] hash:H4sIAAAAAAAAA9sqM3VSYCoALN2ktAYAAAA= 
120299635 frequency_analyzer ~:[0|0|s]  trans:[[0.8859142 2.210139 -1.381302 -0.9232181 0.2866422 -0.2374508 0.09550864]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA1v3SEpn2RoAUbkO6QYAAAA= 
2096549027 passthrough k_k_opacity:[1|-2|s] ShowHandleInPlayMode:False   trans:[[0.3580436 1.280696 -1.937341 0 0.9811939 0 0.1930248]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA+v5OakjNhsA8r+OsAYAAAA= 
647052229 watcher comp:gt ~:[0.1|-1|s 0.25|-2|s]  trans:[[0.8713142 1.867874 -1.199759 -0.2559467 -0.7729841 0.527038 -0.243347]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA1ONZVVq2A0Ar64HTQYAAAA= 
621611715 split visib:False ~:[0|0|s]  trans:[[1.039522 2.676392 -1.874305 0.9413557 -0.195215 -0.2514473 0.1118704] [0.7949681 2.262619 -1.085355 -0.3206356 -0.8898896 -0.2109797 -0.2465297] [0.6813563 2.024714 -0.6055573 0.7641076 -0.5109949 0.2285024 -0.3206409]] paint:[[0 0 0 0] [0 0 0 0] [0 0 0 0]] hash:H4sIAAAAAAAAA5M4bTf1TTAAuLEHKwYAAAA= 
1294064439 split ~:[0|0|s]  trans:[[0.8659937 1.914843 -1.183459 0.6215582 -0.5260025 0.4225009 0.3980952] [0.8434502 2.206677 -1.306482 -0.8060125 -0.5337034 -0.2241776 -0.1234873] [0.827325 2.275038 -1.13015 0.9182611 -0.2269524 0.2670135 -0.1843722]] paint:[[0 0 0 0] [0 0 0 0] [0 0 0 0]] hash:H4sIAAAAAAAAA5M4bTf1TTAAuLEHKwYAAAA= 
1953047022 readout value:185.1663 numDecimals:2 bg:True fontsize:0.432 ~:[185.166305541992|0|s] ti:["185.17"] ti_settings:[[True 0.432 514]] _hideJoltsIns:True  trans:[[0.6874479 2.032934 -1.568965 -0.2167122 -0.9603131 -0.1672543 0.05348545]] paint:[[1 1 1]] hash:H4sIAAAAAAAAA4t0aV4RchwAW9xgxAYAAAA= 
97597188 metronome phase:0 ~:[20|1|s]  trans:[[0.8753131 2.27113 -1.444905 0.05927883 -0.6203415 0.3661329 -0.6910927]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA7tpvCN41gIA9hk2iQYAAAA= 
1443002370 integrator value:266.83852304806 ~:[188.792465209961|0|s 1|0|s 1|0|s]  trans:[[0.7757189 2.095807 -1.658336 -0.4049192 -0.9098397 -0.08336132 0.03581913]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA6vr9hFocQQALSQM1QYAAAA= 
1069337456 add_jolt reversed:False ~:[-13|-1|s]  trans:[[0.2596668 1.298261 0.03338619 -0.005598237 0.2039651 -0.00655494 -0.9789402]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAAzsmWTH3cRgAx16YtwYAAAA= 
250579147 multiply_jolt reversed:False ~:[-1|0|s]  trans:[[0.4476687 1.376948 0.1594659 0.3258318 -0.5087516 -0.08882055 -0.7919069]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA9vFtXSe/hQA7JplKAYAAAA= 
1707384699 readout value:-13 numDecimals:2 bg:True fontsize:0.432 ~:[-13|0|s] ti:["-13.00"] ti_settings:[[True 0.432 514]] _hideJoltsIns:True  trans:[[0.504407 1.377384 0.08065823 0.08973842 -0.8996504 0.06733721 -0.4219502]] paint:[[1 1 1]] hash:H4sIAAAAAAAAAzO03jNBsRAAp+E/qQYAAAA= 
859431981 readout value:1 numDecimals:2 bg:True fontsize:0.432 ~:[1|0|s] ti:["1.00"] ti_settings:[[True 0.432 514]] _hideJoltsIns:True  trans:[[0.4120673 1.392458 -0.1576608 0.27556 -0.924191 0.06792964 -0.2555841]] paint:[[1 1 1]] hash:H4sIAAAAAAAAAzO03jNBsRAAp+E/qQYAAAA= 
725742554 if_else comp:not_eq ~:[1|0|s]  trans:[[0.2793378 1.25341 -0.1799245 -0.3026812 -0.6180888 -0.5214185 0.5044534]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAAzu6UINv63kAhbfRQAYAAAA= 
1067492174 order count:2 state:-13   trans:[[0.1580922 1.254397 0.1569187 -0.1219758 -0.2695959 -0.9535217 -0.05688904]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA9s1XyyFJwEAmmRuggYAAAA= 
1367942619 readout value:-3 numDecimals:2 bg:True fontsize:0.432 ~:[-3|0|s] ti:["-3.00"] ti_settings:[[True 0.432 514]] _hideJoltsIns:True  trans:[[0.3728971 1.296066 -0.3369376 0.3050441 -0.9429865 0.006006962 -0.1329978]] paint:[[1 1 1]] hash:H4sIAAAAAAAAAzO03jNBsRAAp+E/qQYAAAA= 
505164278 bubble openProgress:0 quantize:True beginTime:61.73 endTime:70.47 isPlaying:False playbackPosition:-61.73 fadeDuration:0.00499999988824129 src:"6202da127343f226befc487e/Samples/TNMS.ogg" outsideBooperPos:[0.4754558 1.82535 -0.4322468] ~:[60|0|s 1|0|s] tooltip:"TNMS\n\nHit\ to\ play\.\ Touch\ to\ stop\."   trans:[[0.4211018 1.928087 -0.3398986 0.6535918 -0.6463698 0.1636908 -0.3580911]] paint:[[1 1 1]] hash:H4sIAAAAAAAAA7MNa+y4swEAQi1a4gYAAAA= _collideWhenHidden:False 
1327205922 Venue_Sky_BW ShowHandleInPlayMode:False   trans:[[-0.3646471 1.576742 -0.233439 0.1304403 -0.8181958 -0.2001906 -0.5229385]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA8s0apJlLgAAu3hebQYAAAA= 
593190535 subpatch src:"ByPatchXR/Instruments/BG Color.patch" menuOnBlocks:False disableInputs:WhenGrabbed disableOutputs:WhenGrabbed _displayGraphics:False mixerId:"632E54F" upd:Manually version:H4sIAAAAAAAAAzMyMDLWNTTQNbIMMTS2MjG0MrUAAM5q3h8TAAAA  data:H4sIAAAAAAAAA81YW1PbSBp9p4r/0DX7sA8pi75fVLsPSmYTSA0hWXIZQ7lcAiu2g5BYSzaGzcxv39Mt2TLgTKBmUzWmClqfWvJ3Od/5TrPIZtW0LGIuGKV8d6e6Sq+L+L+7O8wy6TQ1VpLZPM9mZDGtpmfxyzSvMjLEtvNpMY5PaUTxKFPWEb/U3DCqBqQq0qukGOdZ7Ci5ytMiG1bT28zvF9pZJTnxK2Oc1IQNCCH1LC2q+BQbOLVUSkl6LGLCCfmvHjWERdxpv9SkxyNhJbM63OgxIiIqNGO8ueZwQ0odrgYDcpVOixrvZcT/UFgmaTWJ92V1kKw+vCo/fnk9fZ+8S8rnud6/7nvrP8nuDr5GcWcMI1U+HWWzoRgNv5R5TRZpPs9+jRGE0xy5slQrLYVobvT9De6oUMwawznuNjdOttzIs2JcT/y7DJNUIuGNxb/EUKkoda3lJOyxzljis/lLeX6RjeL3s3lGyHAC/17DteoAeQy2znQ0r1vbOs89GjHljKKK9ETErVI+Y5aEpDthQ6p5JJ1ysikBj7RQVLP2gjOtpG1yTiPXfFBVxZijMIaVdU6ubXqjHNQXI7KMGS3N1qKwub3Z+5LwZZkY/WZRv1sXRXMulPFF+WsgUyhNaYtNioz5j/ZRU//h3tgsWbfkfxqaijptKVWKIIjRZTq7uJOIzm3if1wkmOAcPcMo6anIcmq0v8IXI8zNwoSfrc7I+cnhp891tewn47K/ZzpnHKmXNbmejuoJMEqd4QA3J5NsOp7U3qK1Exqp+1wWdcg34y4C2h1J8+m4iF9kRY1SVvUNKvOmnF2mOTlPi0VaHZajLH6fLevhOZ6dlfmwsZNykc0+5+V1fNQuyNm4Db6exqc/7c+znwZYDqusrgEJn4zmNoqklQWEiGISka5zZYBUBXsoLBqEKop2RLWdAJiaCrPIaeSerdkG3ENly0UI3bq2RR5kFdd/i09rhNLzaej5PPTO51VdXm7LtkWeT9SNTA6S4nD2/m2XbSaNYxL0bEg1Sa+A+vP5bIYMHvur42w2RVJv0xrEfvBzzKgD3WgQPHly+zPFhFJtx1PFJeXtxV0K9h0mHRdWrJfGbVi3pOJhwLf1fN4fsQzw+s+b9Pjf4zZgFD737PtpkhX709EoKxou293hGt5aTCoAp8zu4P93dPTXHvtaDe4ETbVDEOBpv8ZEaUmLWs/KvrWBDQEMMB8ImF9Q5ZEgFQjMWqwM9yv+yI5RR2n/882hWR4kVwf5p+OuhuASa6RjhlymVw88x5CwCExILVE9qUMkpAmIsK90/XtrjIZxioh8MEwyagMHUwxzJZj1VlRESuXDAZFyNKdnK8V1w9taWsz9R4dYyb3+mRsX/cQlZ8cvO57mQpNsmZ3P64eleRBgCCbSIGnmB4sAYVvVWrfu9b8HTac/H78o83K2f/yRxIzEnMTiQecHxHhmZ46h5Pcav+ejRh+7MMwwcTGHLVchg8oyIcKSCofENGtNwWC8sWIUYRz5tXGYz0xtpg6jkaqQ4XuL7VOvKhYfyy/mRT/58Eo+O/qDHmiSiTTDPQnPlMCXVtXdKbAZoTBSWuHhzjnmnAjjCh2qqHEqwN0ClCE6qbHXeF+lE4bpMLnA4RiQ+pG42Fss+bOjs8sl5sYv/MPtuw36ospK4xnijx3mfo74CQWHKXDcFIFKjGHGRDNMIdAa7yDEkIbGUaWcNWEpUUsQ3aP4Ry1eVW8Xy/ziIJmOLp8vks5j9T1POVIYasuhmJ0MXeb50oGggnfAi9dtIbeoGA1LBbNe4Ql6UG6bGU9yVH4PAxwNRr2jDOX0HBAwAJIXzPc+cM8gQQM0jGdK45GBqSYltFpw1DIvZR7lKKuv08MPr6pfD5Oz1+bo5bjjBi7+gpLho9foTxcNEAla61Y0NEqTEwtG4SszdIJRIDfVqQbMrvWJRQkBdPxg1cAlaR4bXhTlGbkIfxoqdugnqYTh0Dnqa497Zr2cFjHF7xFqoTCklqDWu2MGk1R7IK9ilohZgl5XpwKcyzzXdkqJGWns6kqgS5X7ZsxbCOUoFc/U5dukSmw+2ZttoJ4+GUtWRV4XmR+HpeO0ns+CBvsmoASa3/twD1DtyUUbr0GYFTjwcQgzyi0zrhGhwh+HMaG6I7DDUadVal6iOqOtuXcE/j/DSXwDTtqALnCQgp4A5J8Ip8D2TczMxxykwDpmRQXTHZwgFMwaTp0e/bNwAnJ+VKO0JwoXQc2YlfPCH0+NW3cGxTTpwvwONzwlMEpGWZ7etP/BuKvIWjkZsS2CEuoX3NtOX426ilYaaaek9nFZdJflzUyD882pn0ovkZhrdKgALB6rKfcWZn7hDtxtP/nZzF6edCH8truDPiyyc99Ylf9HVfcvmr/jraconn8nFnK1WCttXA82Dw3NA2JlX+/7B+zdLhpudiIrPEUJDw9taJn2bTg24Vs39jdvh4RYbxBbN8huA9u2gbcbuoD9Nry3vd16tuFRe4Pff8472AQ28KBYf21jQIr/B6TesAwWFAAA  trans:[[-0.6192891 0.521703 -0.7013247 -0.03551934 -0.5364492 -0.02165078 -0.8429068]] paint:[[0.990566 0.990566 0.990566 0]] hash:H4sIAAAAAAAAA4vru+6+5DMA+QYZqQYAAAA= 
437260536 integrator visib:False value:0.328985544348861 ~:[0.313119947910309|0|s 0.4|-1|s 0.4|-1|s]  trans:[[-0.9755237 1.73501 0.321859 0.01342219 -0.7530134 -0.1957403 -0.6280738]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA3smaf/7yV4A0CE0ggYAAAA= 
119774982 stoe visib:False ~:[0|-1|s]  trans:[[-0.9284916 1.750593 0.315138 -0.2142755 -0.7220078 -0.3760256 -0.5398107]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA5MtEQla6AUA2emOkwYAAAA= 
342900921 random   d_knob:[1|-1|s] trans:[[0.3084593 1.243434 -0.4165506 0.01814498 -0.9458737 -0.05602686 -0.3191468]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA3sZn7j+3BwAZxy0xwYAAAA= _collideWhenHidden:False 
593036036 readout value:46.60295 numDecimals:2 bg:True fontsize:0.432 ~:[46.6029524803162|0|s] ti:["46.60"] ti_settings:[[True 0.432 514]] _hideJoltsIns:True  trans:[[0.7669111 1.82441 -1.450211 -0.4665316 -0.877079 -0.0696151 -0.09074362]] paint:[[1 1 1]] hash:H4sIAAAAAAAAA4t0aV4RchwAW9xgxAYAAAA= 
1589859624 multiply_jolt reversed:False ~:[0.01|-2|s]  trans:[[0.7140006 2.105956 -1.804073 0.01921931 -0.7079133 -0.2093399 -0.6742895]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA8vg+nHtwVUASJbEfQYAAAA= 
1504607016 stoe ~:[0|-1|s]  trans:[[0.7758353 2.104842 -1.707512 0.2916938 -0.9521988 -0.08640194 -0.02769154]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA/t6KWSWQCYATmvvzQYAAAA= 
1411417121 slider_jolt value:2.68628579425121 min:0 mid:0.5 max:1 length:0.3 sizeLocked:True   trans:[[0.5951945 1.428677 -1.765528 -0.4565913 -0.3744465 0.5520403 -0.5886983 2.115866 2.115867 2.115866]] paint:[[0 1 0.8117647]] hash:H4sIAAAAAAAAA0uUkbzivxUA75YBvAYAAAA= 
1109291702 stage_two ShowHandleInPlayMode:False   trans:[[-0.3096199 1.041206 -1.175947 0 0.8412268 0 0.5406826]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAAzuqdUxWaRkABdhJpAYAAAA= 
305943777 random   d_knob:[100|2|s] trans:[[0.7643913 1.829411 -1.314782 0.1471801 -0.9887462 -0.02497287 0.009768247]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA3sZn7j+3BwAZxy0xwYAAAA= _collideWhenHidden:False 
1040467564 rotor visib:False ~:[0.69733|-1|s]  trans:[[-0.1096006 1.485562 -1.339565 0.07034621 -0.690778 -0.7154591 -0.07743064]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA6sX6WJYsQUA3jjg9gYAAAA= 
9300382 integrator visib:False value:46.0957634469513 ~:[74.0024745464325|0|s 1|0|s 1|0|s]  trans:[[-0.109917 1.435495 -1.341357 -0.1822736 -0.6699995 -0.6955788 0.1845197]] paint:[[0 0 0 0]] hash:H4sIAAAAAAAAA6vr9hFocQQALSQM1QYAAAA= 
1136075075 txt width:0.245 height:0.047 fontsize:120 align:Center style:Normal canvasMode:Text_control_canvas overflow:Overflow bg:True ti:["pitch"] ti_settings:[[True 0.432 514]]  trans:[[0.6737685 1.561098 -1.707278 -0.1163837 -0.6240643 0.1689286 -0.753964]] paint:[[0 0 0]] #:[text-font-size-custom] hash:H4sIAAAAAAAAA/M6Y/+kgQcAmMlyBwYAAAA= 
}
connections:{
1943509176 ':[[[1836604290 0] [2017391141 0] [1067492174 0]]]
1556175680 ':[[[499483651 0] [447031804 2]]]
969520966 ':[[[782678884 0]]]
2017391141 ':[[[1556175680 0]] [[969520966 0]] [[447031804 0]]]
1720390403 ':[[[1522802494 0] [1943509176 0]]]
352804140 ':[[[1720390403 0]]]
782678884 ':[[[765622439 0] [447031804 3]]]
447031804 ':[[] [] [[352804140 0]] []]
447031804 <:[[621611715 0]]
120299635 ':[[[1443002370 0]] [] []]
647052229 ':[[[305943777 1]]]
621611715 <:[[485043739 0] [1294064439 0]]
1294064439 <:[[647052229 0] [120299635 0]]
97597188 ':[[[120299635 1]]]
1443002370 <:[[1504607016 0]]
1069337456 ':[[[859431981 0] [725742554 0]]]
250579147 ':[[[1707384699 0] [1069337456 1]]]
725742554 ':[[[1367942619 0] [342900921 1]] []]
1067492174 ':[[[1069337456 0]] [[250579147 0]]]
437260536 <:[[119774982 0]]
119774982 ':[[[593190535/22 0] [593190535/23 0] [593190535/24 0]]]
342900921 ':[[[437260536 0]]]
1589859624 ':[[[1411417121 0]]]
1504607016 ':[[[1589859624 0]]]
305943777 ':[[[593036036 0] [9300382 0]]]
1040467564 SEL:[0 [visibles:[1] parts:[[485043739 0]]]]
9300382 <:[[1040467564 0]]
}
`;

fs.writeFile('output.patch', patchContent, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data has been written to the file');
  }
});
