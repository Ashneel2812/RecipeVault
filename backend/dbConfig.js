// module.exports={
//   user: "postgres",
//   host: "localhost",
//   database: "receipe",
//   password: "root",
//   port: 5433,
// };



module.exports={
  user: process.env.POSTGRES_URL,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
};

