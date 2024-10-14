//import ViewUserButton from "../components/Posts/ViewUserButton";
//jsonnya saya running dilocalhost
const base_url = "http://localhost/cobaAPI/cobaAPI/lipstik.json";

interface Iposts {
  IdProduk: number;
  KodeProduk: string;
  NamaProduk: string;
  HargaModal: string;
  HargaJual: string;
  HargaDiskon: string;
  Stok: number;
}


const Posts = async () => {
  const response = await fetch(base_url, {
    next: { revalidate: 1 },
  });
  const posts: Iposts[] = await response.json();

  return (
    <>
      {/* Date and Header */}
      <p className="text-right text-gray-500">{new Date().toLocaleTimeString()}</p>
      <h1 className="text-3xl font-bold text-fuchsia-500 text-center mb-8">POSTINGAN PAGE</h1>

      {/* Updated Table View */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6 mt-10">Table View</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-fuchsia-500 text-white">
              <th className="py-2 px-4 text-left">IdProduk</th>
              <th className="py-2 px-4 text-left">KodeProduk</th>
              <th className="py-2 px-4 text-left">NamaProduk</th>
              <th className="py-2 px-4 text-left">HargaModal</th>
              <th className="py-2 px-4 text-left">HargaJual</th>
              <th className="py-2 px-4 text-left">HargaDiskon</th>
              <th className="py-2 px-4 text-left">Stok</th> 
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.IdProduk}>
                <td className="py-2 px-4 text-gray-700">{post.IdProduk}</td>
                <td className="py-2 px-4 text-gray-700">{post.KodeProduk}</td>  
                <td className="py-2 px-4 text-gray-700">{post.NamaProduk}</td>
                <td className="py-2 px-4 text-gray-700">{post.HargaModal}</td>
                <td className="py-2 px-4 text-gray-700">{post.HargaJual}</td>
                <td className="py-2 px-4 text-gray-700">{post.HargaDiskon}</td>
                <td className="py-2 px-4 text-gray-700">{post.Stok}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Posts;