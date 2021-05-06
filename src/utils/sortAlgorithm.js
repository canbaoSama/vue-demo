// 排序算法实现

let arr = [6,1,9,4,2,1,8,10,4,5,3];
console.log(fun_10(arr));

/**冒泡排序
  比较相邻的元素。如果第一个比第二个大，就交换他们两个。
  对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
  针对所有的元素重复以上的步骤，除了最后一个。
  持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
*/
function fun_01(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
        let temp = arr[j+1];        // 元素交换
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}



/**选择排序
  选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。

  首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
  再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
  重复第二步，直到所有元素均排序完毕。
*/
function fun_02(arr) {
  let len = arr.length;
  for(let i = 0; i < len - 1; i++) {
    for(let j = i + 1; j < len; j++) {
      if(arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}



/**插入排序
 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 */
function fun_03(arr) {
  let len = arr.length;
  for(let i = 1; i < len; i++) {
     for(let j = 0; j < i; j ++) {
       if(arr[i] < arr[j]) {
         let temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
       }
     }
  }
  return arr;
}




/**希尔排序
 选择一个增量序列 t1，t2，……，tk，其中 ti > tj, tk = 1；
 按增量序列个数 k，对序列进行 k 趟排序；
 每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。

 比如上面的数组，先分成6份[6,1]、[1,8]、[9,10]、[4,4]、[2,5]、[3]分别进行插入排序得到[1,1,9,4,2,3,6,8,10,4,5]
 再分成3份[1,4,6,4]、[1,2,8,5]、[9,3,10]分别进行插入排序得到[1,1,3,4,2,9,4,5,10,6,8]
 再分成1份得到[1,1,2,3,4,4,5,6,8,9,10]
*/
function fun_04(arr) {
  let len = arr.length,
    temp,
    gap = 1;
  while(gap < len/3) {          //动态定义间隔序列
    gap = gap*3+1;
  }
  for (gap; gap > 0; gap = Math.floor(gap/3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i];
      for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
        arr[j+gap] = arr[j];
      }
      arr[j+gap] = temp;
    }
  }
  return arr;
}



/**归并排序
 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
 重复步骤 3 直到某一指针达到序列尾；
 将另一序列剩下的所有元素直接复制到合并序列尾。
 */
function fun_05(arr) {
  let len = arr.length;
  if(len < 2) {
    return arr;
  }
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(fun_05(left), fun_05(right));
}
function merge(left,right) {
  let result = [];
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      result.push(left.shift());
    }else {
      result.push(right.shift());
    }
  }

  if(left.length > 0) {
    result = result.concat(left);
  }
  if(right.length > 0) {
    result = result.concat(right);
  }
  return result;
}



/**快速排序
 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
 重复步骤 3 直到某一指针达到序列尾；
 将另一序列剩下的所有元素直接复制到合并序列尾。
*/
function fun_06(arr) {//不考虑空间复杂度
  if(arr.length < 2) return arr;
  let middle = Math.floor(arr.length/2);
  let mValue = arr.splice(middle,1)[0];
  let left = [],right = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < mValue) {
      left.push(arr[i]);
    }else {
      right.push(arr[i]);
    }
  }
  return fun_06(left).concat([mValue],fun_06(right));
}
// function fun_06(arr) {//考虑空间复杂度适用于数据量大的数组
//   if(arr.length < 2) return arr;
//   let data = quickSort(arr,0,arr.length - 1);
//   return data;
// }
// function quickSort(arr,start,end) {//基准为数组arr[start]
//   if(start >= end) return [arr[start]];
//   let initStart = start;
//   let temp = arr[start];
//   for(let i = start + 1; i <= end; i++) {
//     if(arr[i] <= temp) {
//       let value = arr[i];
//       arr.splice(i,1);
//       arr.splice(initStart,0,value);
//       start++;
//     }
//   }
//   return quickSort(arr,initStart,start - 1).concat([temp],quickSort(arr,start + 1,end));
// }



/**堆排序(感觉太麻烦，没去理解)
 创建一个堆 H[0……n-1]；
 把堆首（最大值）和堆尾互换；
 把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；
 重复步骤 2，直到堆的尺寸为 1。
 */
function fun_07(arr) {
  let len;    // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

  function buildMaxHeap(arr) {   // 建立大顶堆
    len = arr.length;
    for (let i = Math.floor(len/2); i >= 0; i--) {
      heapify(arr, i);
    }
  }

  function heapify(arr, i) {     // 堆调整
    let left = 2 * i + 1,
      right = 2 * i + 2,
      largest = i;

    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest != i) {
      swap(arr, i, largest);
      heapify(arr, largest);
    }
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length-1; i > 0; i--) {
      swap(arr, 0, i);
      len--;
      heapify(arr, 0);
    }
    return arr;
  }

  return heapSort(arr);
}



/**计数排序
 （1）找出待排序的数组中最大和最小的元素
 （2）统计数组中每个值为i的元素出现的次数，存入数组C的第i项
 （3）对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）
 （4）反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1
 */
function fun_08(arr) {
  //let min = Math.min(...arr);不需要找最小值,计数排序不适合那种数值跨度大的,一般都是0开始,比如统计年龄。
  let max = Math.max(...arr);
  let index = 0;
  let newArr = new Array(max + 1).fill(0);
  for(let i = 0; i < arr.length; i++) {
    newArr[arr[i]]++;
  }
  for(let j = 0; j < newArr.length; j++) {
    while(newArr[j] > 0) {
      arr[index++] = j;
      newArr[j]--;
    }
  }
  return arr;
}



/**桶排序
 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。为了使桶排序更加高效，我们需要做到这两点：
 在额外空间充足的情况下，尽量增大桶的数量
 使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中
 同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。
 */
function fun_09(arr,bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  let i;
  let minValue = arr[0];
  let maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];                // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];                // 输入数据的最大值
    }
  }

  //桶的初始化
  let DEFAULT_BUCKET_SIZE = 5;            // 设置桶的默认数量为5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
    fun_03(buckets[i]);                      // 对每个桶进行排序，这里使用了插入排序
    for (let j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
  }

  return arr;
}



/**基数排序
 基数排序是一种非比较型整数排序算法，其原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不是只能使用于整数。
 基数排序：根据键值的每位数字来分配桶；
 计数排序：每个桶只存储单一键值；
 桶排序：每个桶存储一定范围的数值；
 */
function fun_10(arr) {
  let counter = [];
  function radixSort(arr, maxDigit) {
    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
      for(let j = 0; j < arr.length; j++) {
        let bucket = parseInt((arr[j] % mod) / dev);
        if(counter[bucket]==null) {
          counter[bucket] = [];
        }
        counter[bucket].push(arr[j]);
      }
      let pos = 0;
      for(let j = 0; j < counter.length; j++) {
        let value = null;
        if(counter[j]!=null) {
          while ((value = counter[j].shift()) != null) {
            arr[pos++] = value;
          }
        }
      }
    }
    return arr;
  }
  return radixSort(arr,2);
}

