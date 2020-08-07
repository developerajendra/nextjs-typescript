import cloneDeep from 'lodash/cloneDeep';

/**
 *
 * @param data
 * @param keyModel
 * @private
 * For Child Block separate Key with $ prefix
 */
const _mapperHelper = (data, keyModel) => {
    for (let _key in data) {
      let updateKeyName = keyModel[_key];
  
      //For Child Block Changes
      let isSubComp = keyModel[`$${_key}`];
      if (isSubComp && data[_key]) {
        keyMapper(data[_key], isSubComp.KEYMODEL);
      }
  
      /**
       * Should Not Delete Same Name Key
       * and updateKeyName is not Exist in output Block
       */
      if (updateKeyName === _key) {
        continue;
      } else if (updateKeyName) {
        data[updateKeyName] = data[_key];
      }
      delete data[_key];
    }
  };

/**
 *KeyMapper:=> for Update the Key Name of Object/ Array
 * @param data: {Array/Object}
 * @param keyModel: KeyMapper for Change the Key value will be new Key
 * @param sameReference: Boolean ? false => Heavy Process (Use Only in Special Case Only)
 * @returns {'callBack as Next KeyMapper',*}
 */
//TODO-Yatin: Need to Update for Different Reference

export const keyMapper = (data, keyModel, sameReference = true) => {
    if (data && typeof data !== 'boolean') {
      //For Array:
      if (Array.isArray(data) && data.length) {
        data.forEach((it) => _mapperHelper(it, keyModel));
      } else if (data instanceof Object) {
        _mapperHelper(data, keyModel);
      }
      if (!sameReference) {
        data = cloneDeep(data);
      }
  
      //For Next keyModel Updation
      return (data) => {
        keyMapper(data, keyModel);
      };
    } else {
      //eslint-disable-next-line
      console.error('Please Read Documentation of KeyMapper Function');
      return data;
    }
  };


  export const ratingUI = (rating:number)=>{
    const rateValue = Math.floor(rating);
    const tempArray = [1,2,3,4,5];
    return (<ul className="rating">
            {
             tempArray.map((data, index)=>{
                return data <= rateValue ? <li> <i className="icon-rated-star"></i> </li>  : <li className="not-rated"> <i className="icon-rated-star"></i> </li> 
            })  
        }         
    </ul>)
}


export const makeList = (content = '')=>{
  const list = content.split('#');
  return list.map(data=>{
      return data && <li>{data}</li>
  });
}

 