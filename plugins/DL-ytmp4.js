const _0x41b8dd=_0x37d8;function _0x1a77(){const _0x3922d3=['4194029KOHqEH','130VoDKKe','video','7019564dwMdxe','2801310wkQsJX','229SWreEL','329728yJmQJR','application/json','3bSKGEl','https://ytshorts.savetube.me/','downloadVideo','fetchSaveTube','/info','message','.savetube.su','durationLabel','URL\x20is\x20required.','success','qualities','Gagal\x20mendapatkan\x20informasi\x20video.','5982990tkFCKX','https://','10398UOwfHm','2111301awynsd','data','*/*','cdn','downloadUrl','Gagal\x20mendapatkan\x20video.','720p','floor','post','Download\x20gagal:\x20'];_0x1a77=function(){return _0x3922d3;};return _0x1a77();}function _0x37d8(_0x354356,_0x25fd57){const _0x1a77eb=_0x1a77();return _0x37d8=function(_0x37d800,_0xf7cb4){_0x37d800=_0x37d800-0x1da;let _0x38ea3e=_0x1a77eb[_0x37d800];return _0x38ea3e;},_0x37d8(_0x354356,_0x25fd57);}(function(_0x382f57,_0x5e5b27){const _0x2b6530=_0x37d8,_0x4168d5=_0x382f57();while(!![]){try{const _0x3b5794=-parseInt(_0x2b6530(0x1e0))/0x1*(-parseInt(_0x2b6530(0x1f1))/0x2)+-parseInt(_0x2b6530(0x1e3))/0x3*(-parseInt(_0x2b6530(0x1de))/0x4)+parseInt(_0x2b6530(0x1ef))/0x5+parseInt(_0x2b6530(0x1df))/0x6+-parseInt(_0x2b6530(0x1db))/0x7+-parseInt(_0x2b6530(0x1e1))/0x8+-parseInt(_0x2b6530(0x1f2))/0x9*(parseInt(_0x2b6530(0x1dc))/0xa);if(_0x3b5794===_0x5e5b27)break;else _0x4168d5['push'](_0x4168d5['shift']());}catch(_0xd97cfe){_0x4168d5['push'](_0x4168d5['shift']());}}}(_0x1a77,0xe058d));import _0x22582e from'axios';class YouTubeScraper{constructor(){this['qualities']={'video':{'144p':'1','240p':'2','360p':'3','480p':'4','720p':'5','1080p':'6'}};}async[_0x41b8dd(0x1e6)](_0x19e15d,_0x432b5a,_0x4ebfe5={}){const _0x2b19fb=_0x41b8dd,_0x28d622={'accept':_0x2b19fb(0x1f4),'authority':'cdn'+_0x432b5a+'.savetube.su','referer':_0x2b19fb(0x1e4),'origin':_0x2b19fb(0x1e4),'user-agent':'Postify/1.0.0','Content-Type':_0x2b19fb(0x1e2)};try{const _0x361e7f=await _0x22582e[_0x2b19fb(0x1fa)](_0x19e15d,_0x4ebfe5,{'headers':_0x28d622});return _0x361e7f[_0x2b19fb(0x1f3)];}catch(_0x17fc81){throw new Error(_0x17fc81['message']);}}async[_0x41b8dd(0x1e5)](_0x1bf4d2,_0x21b6a2=_0x41b8dd(0x1f8)){const _0x1e7eb0=_0x41b8dd,_0x407ead=Math[_0x1e7eb0(0x1f9)](Math['random']()*0xb)+0x33,_0x9a6055=_0x1e7eb0(0x1f5)+_0x407ead+_0x1e7eb0(0x1e9),_0x16955a=this[_0x1e7eb0(0x1ed)][_0x1e7eb0(0x1dd)];try{const _0x1c28a5=await this[_0x1e7eb0(0x1e6)](_0x1e7eb0(0x1f0)+_0x9a6055+_0x1e7eb0(0x1e7),_0x407ead,{'url':_0x1bf4d2});if(!_0x1c28a5||!_0x1c28a5[_0x1e7eb0(0x1f3)])throw new Error(_0x1e7eb0(0x1ee));const _0x28a6ef=await this[_0x1e7eb0(0x1e6)](_0x1e7eb0(0x1f0)+_0x9a6055+'/download',_0x407ead,{'downloadType':_0x1e7eb0(0x1dd),'quality':_0x16955a[_0x21b6a2]||_0x16955a[_0x1e7eb0(0x1f8)],'key':_0x1c28a5['data']['key']});if(!_0x28a6ef||!_0x28a6ef[_0x1e7eb0(0x1f3)])throw new Error('Gagal\x20mendapatkan\x20tautan\x20unduhan.');return{'success':!![],'title':_0x1c28a5[_0x1e7eb0(0x1f3)]['title'],'duration':_0x1c28a5[_0x1e7eb0(0x1f3)][_0x1e7eb0(0x1ea)],'thumbnail':_0x1c28a5['data']['thumbnail'],'downloadUrl':_0x28a6ef[_0x1e7eb0(0x1f3)][_0x1e7eb0(0x1f6)],'quality':_0x21b6a2,'type':_0x1e7eb0(0x1dd)};}catch(_0x1f24f5){throw new Error(_0x1e7eb0(0x1da)+_0x1f24f5['message']);}}}export async function ytmp4DL(_0x2e8274,_0x1c4c8b=_0x41b8dd(0x1f8)){const _0x14be59=_0x41b8dd;if(!_0x2e8274)throw new Error(_0x14be59(0x1eb));const _0x3b389e=new YouTubeScraper();try{const _0x48a6ee=await _0x3b389e['downloadVideo'](_0x2e8274,_0x1c4c8b);if(!_0x48a6ee[_0x14be59(0x1ec)])throw new Error(_0x48a6ee[_0x14be59(0x1e8)]||_0x14be59(0x1f7));return _0x48a6ee;}catch(_0x2ac7c0){throw new Error(_0x2ac7c0[_0x14be59(0x1e8)]);}}
