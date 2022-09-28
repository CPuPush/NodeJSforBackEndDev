/*
GraphQL adalah query language yang dikembangkan oleh engineer facebook untuk memudahkan proses pengiriman dan pengambilan data.

//* Hanya terdapat 1 buah endpoint untuk berkomuniasi dengan server untuk mendapatkan suatu data.
//* Client/aplikasi dapat mendefinisikan data yang dibutuhkan sesuka hati sehingga akan meningkatkan efisiensi mengkonsumsi API dan hemat pertukaran data.
//* Tidak ada method seperti GET, POST, atau Delete di graphQL, selama request yang dilakukan menggunakan format graph query language maka sisi backend akan paham apa yang diminta oleh client.
//* Overfetching atau pengambilan data berlebih adalah dimana client.
//* Rapid development.

//? 3 alasan  mengapa facebook membuat graphql
//* Bertambahnya mobile usage sehingga diharapkan dengan adanya graphql mobile devices akan semakin sedikit dalam mengkonsumsi data. Graphql akan mengurangi konsumsi data yang dilakukan oleh mobile devices.
//* Meningkatkan performa. Dengan semakin sedikitnya data yang dikonsumsi mobile devices maka performa secara otomatis akan meningkat.
//* Banyaknya framework frontend yang ada saat ini(react, vie, angular, dsb) maka graphql hadir untuk menstandarkan proses konsumsi API(meningkatkan efisiensi konsumsi api).

KONSEP GRAPHQL
1. Schema Base
2. Query & Mutation
3. Hirarki
4. Type Definition
5. Variable, Arguments & Resolver
6. Fragments
7. Alias
8. Directive
9. Context

*/