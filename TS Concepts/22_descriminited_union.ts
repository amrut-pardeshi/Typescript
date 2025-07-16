interface Warning {
  type: "warning";
  msg: string;
}

interface Info {
  type: "info";
  text: string;
}

interface Success {
  type: "success";
  message: string;
}

type Log = Warning | Info | Success;

function handleLog(log: Log) {
  switch (log.type) {
    case "info":
      console.log(log.text)
      break
    case "success":
      console.log(log.message)
      break;
    case "warning":
      console.log(log.msg)
      break;
  }
}
