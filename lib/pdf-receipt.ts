import jsPDF from "jspdf"

export interface PackageData {
  id: string
  status: string
  from: string
  to: string
  date: string
  deliveredDate?: string
  weight?: string
  dimensions?: string
  service?: string
  cost?: string
  receiver?: string
  sender?: string
}

export function generatePackageReceipt(packageData: PackageData) {
  const doc = new jsPDF()

  // Set colors
  const primaryColor = [102, 45, 145] // Purple
  const textColor = [51, 51, 51]
  const lightGray = [200, 200, 200]

  // Header with logo area and purple background
  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, 210, 50, "F")

  // Add logo text (using text as placeholder since we can't embed image directly)
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(28)
  doc.setFont("helvetica", "bold")
  doc.text("FedEx", 20, 22)

  doc.setTextColor(255, 150, 0)
  doc.setFontSize(28)
  doc.text("Global", 70, 22)

  // Logo decorative line
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("SHIPPING RECEIPT", 160, 25)

  // Reset text color
  doc.setTextColor(...textColor)

  // Receipt details section
  let yPos = 65

  // Tracking number (prominent)
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("Tracking Number:", 20, yPos)
  doc.setFontSize(14)
  doc.setTextColor(...primaryColor)
  doc.text(packageData.id, 20, yPos + 7)

  // Date
  doc.setTextColor(...textColor)
  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text(`Date: ${packageData.date}`, 150, yPos)

  yPos += 25

  // Divider line
  doc.setDrawColor(...lightGray)
  doc.line(20, yPos, 190, yPos)

  yPos += 15

  // Shipping Information
  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text("SHIPPING INFORMATION", 20, yPos)

  yPos += 10

  // From/To section
  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("FROM:", 20, yPos)
  doc.text("TO:", 110, yPos)

  yPos += 7

  doc.setFont("helvetica", "normal")
  doc.text(packageData.sender || "Sender", 20, yPos)
  doc.text(packageData.receiver || "Receiver", 110, yPos)

  yPos += 5
  doc.text(packageData.from, 20, yPos)
  doc.text(packageData.to, 110, yPos)

  yPos += 15

  // Divider line
  doc.line(20, yPos, 190, yPos)

  yPos += 15

  // Package Details
  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text("PACKAGE DETAILS", 20, yPos)

  yPos += 10

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")

  // Status
  doc.setFont("helvetica", "bold")
  doc.text("Status:", 20, yPos)
  doc.setFont("helvetica", "normal")
  doc.text(packageData.status, 60, yPos)

  yPos += 7

  // Service
  if (packageData.service) {
    doc.setFont("helvetica", "bold")
    doc.text("Service:", 20, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(packageData.service, 60, yPos)
    yPos += 7
  }

  // Weight
  if (packageData.weight) {
    doc.setFont("helvetica", "bold")
    doc.text("Weight:", 20, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(packageData.weight, 60, yPos)
    yPos += 7
  }

  // Dimensions
  if (packageData.dimensions) {
    doc.setFont("helvetica", "bold")
    doc.text("Dimensions:", 20, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(packageData.dimensions, 60, yPos)
    yPos += 7
  }

  // Delivery date
  if (packageData.deliveredDate) {
    doc.setFont("helvetica", "bold")
    doc.text("Delivered:", 20, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(packageData.deliveredDate, 60, yPos)
    yPos += 7
  }

  yPos += 8

  // Divider line
  doc.line(20, yPos, 190, yPos)

  yPos += 15

  // Cost section
  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text("CHARGES", 20, yPos)

  yPos += 10

  doc.setFontSize(10)
  doc.text("Shipping Cost:", 20, yPos)
  doc.text(packageData.cost || "$125.00", 150, yPos)

  yPos += 15

  // Total
  doc.setFillColor(240, 240, 240)
  doc.rect(20, yPos - 5, 170, 10, "F")
  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text("TOTAL:", 20, yPos)
  doc.text(packageData.cost || "$125.00", 150, yPos)

  // Footer
  yPos = 270
  doc.setFontSize(8)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(128, 128, 128)
  doc.text("Thank you for choosing FedEx Global for your shipping needs.", 105, yPos, { align: "center" })
  doc.text("For support, visit our website or call customer service.", 105, yPos + 5, { align: "center" })

  // Save the PDF
  doc.save(`FedEx-Receipt-${packageData.id}.pdf`)
}
