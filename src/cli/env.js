const prefix = "RSS_";

const parseEnv = () => {
  try {
    let allEnv = [];
    Object.entries(process.env).forEach(([k, v]) => {
      if (k.startsWith(prefix)) {
        allEnv.push(`${k}=${v}`);
      }
    });
    console.log(allEnv.join("; "));
  } catch (error) {}
};

parseEnv();
