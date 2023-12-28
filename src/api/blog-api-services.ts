export const baseUrl = 'https://658c56c2859b3491d3f5ecb1.mockapi.io/api/v1/blogs/blogs';

export const getBlogs = async (setBlogList: React.SetStateAction<any>) => {
        try{
              const response = await fetch(baseUrl);  
              const data = await response.json();
              setBlogList(data);

        }catch(err){
                console.log(err)
        }
}
export const getBlogById = async (id: string,setBlogDetail: React.SetStateAction<any>) => {
        try{
              const response = await fetch(`${baseUrl}/${id}`);  
              const data = await response.json();
              setBlogDetail(data);

        }catch(err){
                console.log(err)
        }
}
