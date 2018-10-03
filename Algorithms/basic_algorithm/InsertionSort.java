package basic_algorithm;

import java.util.Arrays;

public class InsertionSort {
//	使用 java 实现的插入排序
	public static void insertionSort(int[] arr) {
		if (arr == null || arr.length < 2) {
			return;
		}
		for (int i = 1; i < arr.length; i++) {
//			指定第 i 个数的初始值
			for (int j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
//				从 i 个数开始往前进行排序
//				j >= 0 防止越界 arr[j] > arr[j + 1] 保证左边的最小
				swap(arr, j, j+1);
			}
		}
	}
	
	public static void swap(int[] arr, int i, int j) {
//		交换两个数的另一种写法
//		arr[i] = arr[i] ^ arr[j];
//		arr[j] = arr[i] ^ arr[j];
//		arr[i] = arr[i] ^ arr[j];
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	
	

	
//	for test (绝对正确的算法)
//	一般使用系统自带的排序算法，或者容易实现无错误的算法
	public static void rightMethod(int[] arr) {
		Arrays.sort(arr);		
	}
	
	
	
	
	
//	for test
//  使用对数器进行测试
	public static int[] generateRandomArray(int size, int value) {
//		使用系统自带的随机数生成器生成备选数集合
//		Math.random() -> double [0,1)
//		(int) ((size + 1) * Math.random()) -> [0,size] 整数集合
//		size =6, size + 1 =7;
//		Math.random() -> [0,1) * 7 -> [0,7) double
//		double -> int [0,6] -> int
		
		
//		生成长度随机的数组
		int[] arr = new int[(int) ((size + 1) * Math.random())];
//		数组内的每个数也是随机的
		for (int i = 0; i < arr.length; i++) {
			arr[i] = (int) ((value + 1) * Math.random()) - (int) (value * Math.random());
		}
		return arr;
		
	}
	
//	for test
//	生成拷贝数组的方法
	public static int[] copyArray(int[] arr) {
		if (arr == null) {
			return null;
		}
		int[] res = new int[arr.length];
		for (int i = 0; i < arr.length; i++) {
			res[i] = arr[i];
		}
		return res;
	}

//	for test
//	判断两个数组是否相同
	public static boolean isEqual(int[] arrone, int[] arrtwo) {
		if((arrone == null && arrtwo != null) || (arrone != null && arrtwo == null)) {
			return false;
		}
		if(arrone == null && arrtwo == null) {
			return true;
		}
		if(arrone.length != arrtwo.length) {
			return false;
		}
		for (int i = 0; i < arrone.length; i++) {
			if (arrone[i] != arrtwo[i]) {
				return false;
			}
		}
		return true;
	}
	
//	for test
//	打印数组的方法
	public static void printArray(int[] arr) {
		if(arr == null || arr.length ==0) {
			System.out.println("");
		}else {
			for (int i = 0; i < arr.length; i++) {
				System.out.print(arr[i] + " ");
			}
		}
	}
	

//	大样本测试 方法
	public static void main(String[] args) {
		int testTime = 500000;
		int size = 10;
		int value = 100;
		boolean succeed = true;
		for (int i = 0; i < testTime; i++) {
			int[] arrone = generateRandomArray(size, value);
			int[] arrtwo = copyArray(arrone);
			int[] arrthree = copyArray(arrone);
			insertionSort(arrone);
			rightMethod(arrtwo);
			if(!isEqual(arrone, arrtwo)) {
				succeed = false;
				printArray(arrthree);
				break;
			}
		}
		
		System.out.println(succeed ? "well done!" : "wrong algorithms!");
		
		int[] arr = generateRandomArray(size, value);
		printArray(arr);
		
	}

}
