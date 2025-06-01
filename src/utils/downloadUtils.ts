import html2canvas from 'html2canvas'

export const downloadCardAsPNG = async (
  elementId: string, 
  filename: string = 'whoami-card'
): Promise<void> => {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error('다운로드할 요소를 찾을 수 없습니다.')
    }

    // html2canvas 옵션 설정
    const canvas = await html2canvas(element, {
      backgroundColor: null, // 투명 배경
      scale: 2, // 높은 해상도를 위한 스케일
      useCORS: true, // CORS 이슈 해결
      allowTaint: true,
      removeContainer: true,
      imageTimeout: 15000,
      height: element.scrollHeight,
      width: element.scrollWidth,
      scrollX: 0,
      scrollY: 0
    })

    // Canvas를 이미지로 변환
    const imgData = canvas.toDataURL('image/png', 1.0)
    
    // 다운로드 링크 생성
    const link = document.createElement('a')
    link.href = imgData
    link.download = `${filename}.png`
    
    // 다운로드 실행
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
  } catch (error) {
    console.error('PNG 다운로드 실패:', error)
    throw new Error('이미지 다운로드에 실패했습니다. 다시 시도해주세요.')
  }
}

export const downloadCardAsJPG = async (
  elementId: string, 
  filename: string = 'whoami-card'
): Promise<void> => {
  try {
    const element = document.getElementById(elementId)
    if (!element) {
      throw new Error('다운로드할 요소를 찾을 수 없습니다.')
    }

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff', // 흰색 배경 (JPG는 투명도 미지원)
      scale: 2,
      useCORS: true,
      allowTaint: true,
      removeContainer: true,
      imageTimeout: 15000,
      height: element.scrollHeight,
      width: element.scrollWidth,
      scrollX: 0,
      scrollY: 0
    })

    const imgData = canvas.toDataURL('image/jpeg', 0.9)
    
    const link = document.createElement('a')
    link.href = imgData
    link.download = `${filename}.jpg`
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
  } catch (error) {
    console.error('JPG 다운로드 실패:', error)
    throw new Error('이미지 다운로드에 실패했습니다. 다시 시도해주세요.')
  }
} 