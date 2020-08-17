
        // lyrics button <---> start (0 to 12)

       const lyricsButton =document.getElementById('search').addEventListener('click',()=>{
        const artist = document.getElementById('singer').innerText;
        const title = document.getElementById('album').innerText;
      
        searchLyrics(artist,title);

        });
        const lyricsButton1 =document.getElementById('search1').addEventListener('click',()=>{
            const artist = document.getElementById('singer1').innerText;
            const title = document.getElementById('album1').innerText;
    
            searchLyrics(artist,title);
    
            });
            const lyricsButton2 =document.getElementById('search2').addEventListener('click',()=>{
                const artist = document.getElementById('singer2').innerText;
                const title = document.getElementById('album2').innerText;
        
                searchLyrics(artist,title);
        
                });
                const lyricsButton3 =document.getElementById('search3').addEventListener('click',()=>{
                    const artist = document.getElementById('singer3').innerText;
                    const title = document.getElementById('album3').innerText;
            
                    searchLyrics(artist,title);
            
                    });
                    const lyricsButton4 =document.getElementById('search4').addEventListener('click',()=>{
                        const artist = document.getElementById('singer4').innerText;
                        const title = document.getElementById('album4').innerText;
                
                        searchLyrics(artist,title);
                
                        });
                        const lyricsButton5 =document.getElementById('search5').addEventListener('click',()=>{
                            const artist = document.getElementById('singer5').innerText;
                            const title = document.getElementById('album5').innerText;
                    
                            searchLyrics(artist,title);
                    
                            });
                            const lyricsButton6 =document.getElementById('search6').addEventListener('click',()=>{
                                const artist = document.getElementById('singer6').innerText;
                                const title = document.getElementById('album6').innerText;
                        
                                searchLyrics(artist,title);
                        
                                });
                                const lyricsButton7 =document.getElementById('search7').addEventListener('click',()=>{
                                    const artist = document.getElementById('singer7').innerText;
                                    const title = document.getElementById('album7').innerText;
                            
                                    searchLyrics(artist,title);
                            
                                    });
                                    const lyricsButton8 =document.getElementById('search8').addEventListener('click',()=>{
                                        const artist = document.getElementById('singer8').innerText;
                                        const title = document.getElementById('album8').innerText;
                                
                                        searchLyrics(artist,title);
                                
                                        });
                                        const lyricsButton9 =document.getElementById('search9').addEventListener('click',()=>{
                                            const artist = document.getElementById('singer9').innerText;
                                            const title = document.getElementById('album9').innerText;
                                    
                                            searchLyrics(artist,title);
                                    
                                            });
                                            const lyricsButton10 =document.getElementById('search10').addEventListener('click',()=>{
                                                const artist = document.getElementById('singer10').innerText;
                                                const title = document.getElementById('album10').innerText;
                                                
                                                searchLyrics(artist,title);
                                        
                                                });
                                                const lyricsButton11 =document.getElementById('search11').addEventListener('click',()=>{
                                                    const artist = document.getElementById('singer11').innerText;
                                                    const title = document.getElementById('album11').innerText;
                                            
                                                    searchLyrics(artist,title);
                                            
                                                    });
                                                    const lyricsButton12 =document.getElementById('search12').addEventListener('click',()=>{
                                                        const artist = document.getElementById('singer12').innerText;
                                                        const title = document.getElementById('album12').innerText;
                                                
                                                        searchLyrics(artist,title);
                                                
                                                        });

//   apiCall<--->
        const apiURL = 'https://api.lyrics.ovh';
        
        // fetch function <----->
        function searchLyrics(artist,title){
            console.log(artist,title);
            fetch(`${apiURL}/v1/${artist}/${title}`)
            .then(res=> {return res.json()})
           .then(getLyrics);
            };


//  get Lyrics <--->
             function getLyrics(data){
                    console.log(data);
                    let lyrics = document.getElementById('lyrics');
                    lyrics.innerText =`${data.lyrics}`;
                    let onlyName = data.lyrics;
                    let singerName = document.getElementById('singerName');
                    singerName.innerText = onlyName.slice(20,35);
                     };



        // search button <------>
        const submit = document.getElementById('submit').addEventListener('click',()=>{
            const name = document.getElementById('name').value;

            if(!name){
                alert('please type a song name');
            } else{
                searchSong(name);
            }
            });



        // fetch function <----->
        function searchSong(term){
        fetch(`${apiURL}/suggest/${term}`)
        .then(res=> {return res.json()})
        .then(getName);
         };

        //  get data about name and artist <---->

        function getName(data){
        console.log(data)
       
        let singer = document.getElementById('singer');
        singer.innerText = `${data.data[0].artist.name}`;
        let album = document.getElementById('album');
        album.innerText = `${data.data[0].title}`;


        let singer1 = document.getElementById('singer1');
        singer1.innerText = `${data.data[1].artist.name}`;
        let album1 = document.getElementById('album1');
        album1.innerText = `${data.data[1].title}`;


        let singer2 = document.getElementById('singer2');
        singer2.innerText = `${data.data[2].artist.name}`;
        let album2 = document.getElementById('album2');
        album2.innerText = `${data.data[2].title}`;


        let singer3 = document.getElementById('singer3');
        singer3.innerText = `${data.data[3].artist.name}`;
        let album3 = document.getElementById('album3');
        album3.innerText = `${data.data[3].title}`;


        let singer4 = document.getElementById('singer4');
        singer4.innerText = `${data.data[4].artist.name}`;
        let album4 = document.getElementById('album4');
        album4.innerText = `${data.data[4].title}`;


        let singer5 = document.getElementById('singer5');
        singer5.innerText = `${data.data[5].artist.name}`;
        let album5 = document.getElementById('album5');
        album5.innerText = `${data.data[5].title}`;


        let singer6 = document.getElementById('singer6');
        singer6.innerText = `${data.data[6].artist.name}`;
        let album6 = document.getElementById('album6');
        album6.innerText = `${data.data[6].title}`;


        let singer7 = document.getElementById('singer7');
        singer7.innerText = `${data.data[7].artist.name}`;
        let album7 = document.getElementById('album7');
        album7.innerText = `${data.data[7].title}`;



        let singer8 = document.getElementById('singer8');
        singer8.innerText = `${data.data[8].artist.name}`;
        let album8 = document.getElementById('album8');
        album8.innerText = `${data.data[8].title}`;


        
        let singer9 = document.getElementById('singer9');
        singer9.innerText = `${data.data[9].artist.name}`;
        let album9 = document.getElementById('album9');
        album9.innerText = `${data.data[9].title}`;
        let artist = document.getElementById('artist');
        artist.innerText = `${data.data[9].album.title}`;


        
        let singer10 = document.getElementById('singer10');
        singer10.innerText = `${data.data[10].artist.name}`;
        let album10 = document.getElementById('album10');
        album10.innerText = `${data.data[10].title}`;
        let artist1 = document.getElementById('artist1');
        artist1.innerText = `${data.data[10].album.title}`;


        let singer11 = document.getElementById('singer11');
        singer11.innerText = `${data.data[11].artist.name}`;
        let album11 = document.getElementById('album11');
        album11.innerText = `${data.data[11].title}`;
        let artist2 = document.getElementById('artist2');
        artist2.innerText = `${data.data[11].album.title}`;
        

        let singer12 = document.getElementById('singer12');
        singer12.innerText = `${data.data[12].artist.name}`;
        let album12 = document.getElementById('album12');
        album12.innerText = `${data.data[12].title}`;
        let artist3 = document.getElementById('artist3');
        artist3.innerText = `${data.data[12].album.title}`;

        };