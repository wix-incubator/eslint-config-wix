const foo = () => {
  // nothing
};

const bar = (a) => {
  //nothing
};

async function zar(a) {
  return await new Promise((r) => r(a));
}

const goo = async (a) => {
  return await new Promise((r) => r(a));
};

let result;

const returnAssign = () => result = 1;

module.exports = {
  foo,
  bar,
  zar,
  goo,
  returnAssign
};

usedBeforeDefine();

function usedBeforeDefine() {
  console.log(result);
}

