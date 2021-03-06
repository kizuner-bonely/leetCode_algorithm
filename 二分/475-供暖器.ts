// //* 01-0
// function s_binarySearch (nums: number[], target: number) {
//     let h = 0, t = nums.length - 1, mid: number
//     while (h < t) {
//         mid = ((h + t) >> 1) + 1
//         if (nums[mid] <= target) h = mid
//         else t = mid - 1
//     }
//     return nums[h]
// }
// //* 01-1
// function b_binarySearch (nums: number[], target: number) {
//     let h = 0, t = nums.length - 1, mid: number
//     while (h < t) {
//         mid = (h + t) >> 1
//         if (nums[mid] >= target) t = mid
//         else h = mid + 1
//     }
//     return nums[h]
// }
// function findRadius(houses: number[], heaters: number[]): number {
//     heaters = heaters.sort((i, j) => i - j)
//     let maxRadius = -1, recentHeater: number
//     houses.forEach(house => {
//         recentHeater = Math.min(Math.abs(house - s_binarySearch(heaters, house)), Math.abs(b_binarySearch(heaters, house) - house))
//         maxRadius = Math.max(maxRadius, recentHeater)
//     })
//     return maxRadius
// }

function b_binarySearch (nums: number[], target: number) {
    let h = 0, t = nums.length - 1, mid: number
    while (h < t) {
        mid = (h + t) >> 1
        if (nums[mid] >= target) t = mid
        else h = mid + 1
    }
    return h
}
function findRadius(houses: number[], heaters: number[]): number {
    heaters = heaters.sort((i, j) => i - j)
    let maxRadius = -1, a: number, b: number, ind: number
    houses.forEach(house => {
        ind = b_binarySearch(heaters, house)
        a = Math.abs(heaters[ind] - house)
        b = Math.abs(ind ? heaters[ind - 1] - house : a + 1)
        maxRadius = Math.max(maxRadius, Math.min(a, b))
    })
    return maxRadius
}

export {}
