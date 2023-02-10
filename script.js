setTimeout(()=>{
   document.querySelector('.output').innerText="10";
    setTimeout(()=>{
        document.querySelector('.output').innerText=9;

        setTimeout(()=>{
            document.querySelector('.output').innerText=8;
            setTimeout(()=>{
              document.querySelector('.output').innerText=7;
                setTimeout(()=>{
                  document.querySelector('.output').innerText=6;
                    setTimeout(()=>{
                        document.querySelector('.output').innerText=5;
                        setTimeout(()=>{
                            document.querySelector('.output').innerText=4;
                            setTimeout(()=>{
                                const outputOrginal = document.querySelector('.output').innerText=3;
                                setTimeout(()=>{
                                    const outputOrginal = document.querySelector('.output').innerText=2;
                                    setTimeout(()=>{
                                        const outputOrginal = document.querySelector('.output').innerText=1;
                                        setTimeout(()=>{
                                            document.querySelector('.output').innerText="Happy Independence Day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)