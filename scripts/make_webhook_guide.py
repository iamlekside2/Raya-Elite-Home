# Generates a branded step-by-step PDF: how to create the Google Sheets webhook.
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Table, TableStyle,
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

NAVY = HexColor("#002147")
NAVY_LT = HexColor("#0a3262")
GOLD = HexColor("#C9A84C")
INK = HexColor("#2C2C2C")
SOFT = HexColor("#5a5a5a")
PANEL = HexColor("#F3ECE0")
CODE_BG = HexColor("#0d1b2e")
CODE_FG = HexColor("#e9eef5")

OUT = r"C:\Users\HP\Downloads\Raya-Elite-Google-Sheet-Webhook-Guide.pdf"

styles = getSampleStyleSheet()
H1 = ParagraphStyle("H1", parent=styles["Title"], textColor=NAVY, fontName="Helvetica-Bold",
                    fontSize=22, leading=26, spaceAfter=2, alignment=TA_LEFT)
SUB = ParagraphStyle("SUB", parent=styles["Normal"], textColor=SOFT, fontSize=10.5, leading=15, spaceAfter=4)
STEPH = ParagraphStyle("STEPH", parent=styles["Normal"], textColor=NAVY, fontName="Helvetica-Bold",
                       fontSize=13, leading=17, spaceBefore=8, spaceAfter=4)
BODY = ParagraphStyle("BODY", parent=styles["Normal"], textColor=INK, fontSize=10.5, leading=16, spaceAfter=4)
BULLET = ParagraphStyle("BULLET", parent=BODY, leftIndent=12, bulletIndent=2, spaceAfter=2)
CODE = ParagraphStyle("CODE", parent=styles["Normal"], textColor=CODE_FG, fontName="Courier",
                      fontSize=9, leading=13)
CALL = ParagraphStyle("CALL", parent=BODY, textColor=NAVY, fontSize=10, leading=15)
KICK = ParagraphStyle("KICK", parent=styles["Normal"], textColor=GOLD, fontName="Helvetica-Bold",
                      fontSize=9, leading=12, spaceAfter=2)


def code_box(text):
    p = Paragraph(text.replace(" ", "&nbsp;"), CODE)
    t = Table([[p]], colWidths=[170 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), CODE_BG),
        ("LEFTPADDING", (0, 0), (-1, -1), 10), ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LINEBEFORE", (0, 0), (0, -1), 3, GOLD),
    ]))
    return t


def callout(text):
    p = Paragraph(text, CALL)
    t = Table([[p]], colWidths=[170 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("LEFTPADDING", (0, 0), (-1, -1), 12), ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 9), ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
        ("LINEBEFORE", (0, 0), (0, -1), 3, GOLD),
    ]))
    return t


def step_card(num, title, items):
    badge = Table([[Paragraph(f'<font color="#ffffff"><b>{num}</b></font>', BODY)]], colWidths=[9 * mm], rowHeights=[9 * mm])
    badge.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), GOLD), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
    ]))
    head = Table([[badge, Paragraph(title, STEPH)]], colWidths=[12 * mm, 158 * mm])
    head.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (0, 0), 0),
                              ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    flow = [head, Spacer(1, 3)]
    flow.extend(items)
    flow.append(Spacer(1, 8))
    return flow


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(NAVY)
    canvas.rect(0, 770, 612, 72, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.rect(0, 766, 612, 4, fill=1, stroke=0)
    # diamond
    canvas.saveState(); canvas.translate(48, 806); canvas.rotate(45)
    canvas.setFillColor(GOLD); canvas.rect(-6, -6, 12, 12, fill=1, stroke=0); canvas.restoreState()
    canvas.setFillColor(HexColor("#ffffff")); canvas.setFont("Helvetica-Bold", 14)
    canvas.drawString(66, 808, "RAYA ELITE")
    canvas.setFillColor(GOLD); canvas.setFont("Helvetica", 8)
    canvas.drawString(66, 796, "HOME & OFFICE CLEANING SERVICES")
    canvas.setFillColor(HexColor("#cdd6e3")); canvas.setFont("Helvetica", 8.5)
    canvas.drawRightString(564, 804, "Setup Guide")
    # footer
    canvas.setFillColor(SOFT); canvas.setFont("Helvetica", 8)
    canvas.drawString(48, 30, "Raya Elite — Google Sheet Webhook Setup")
    canvas.drawRightString(564, 30, f"Page {doc.page}")
    canvas.setStrokeColor(HexColor("#e2dccd")); canvas.line(48, 40, 564, 40)
    canvas.restoreState()


doc = BaseDocTemplate(OUT, pagesize=letter, leftMargin=48, rightMargin=48, topMargin=92, bottomMargin=52)
frame = Frame(48, 52, 516, 690, id="main")
doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=header_footer)])

S = []
S.append(Paragraph("Connecting the Lead &amp; Booking Log", KICK))
S.append(Paragraph("How to Create the Google Sheet Webhook", H1))
S.append(Spacer(1, 4))
S.append(Paragraph(
    "This webhook lets the Raya Elite website write every form submission "
    "(Homepage, Contact, and Booking) straight into one Google Sheet, automatically. "
    "It takes about 5 minutes and is a one-time setup.", SUB))
S.append(Spacer(1, 6))
S.append(callout(
    "<b>Before you start:</b> you'll need the script file "
    "<b>google-apps-script.gs</b> (provided by the website team) and a Google account."))
S.append(Spacer(1, 10))

S += step_card(1, "Create the spreadsheet", [
    Paragraph("Go to <b>sheets.google.com</b> and open a blank spreadsheet.", BODY),
    Paragraph("Rename it (click the title, top-left) to:", BODY),
    code_box("Raya Elite Lead &amp; Booking Log"),
])

S += step_card(2, "Open the Apps Script editor", [
    Paragraph("In the sheet's menu bar, click <b>Extensions &rarr; Apps Script</b>.", BODY),
    Paragraph("Delete any code already in the editor (e.g. the empty <font name='Courier'>function myFunction(){}</font>).", BODY),
])

S += step_card(3, "Paste the script", [
    Paragraph("Open <b>google-apps-script.gs</b>, copy <b>all</b> of it, and paste it into the editor.", BODY),
    Paragraph("Click the <b>Save</b> icon in the toolbar.", BODY),
])

S += step_card(4, "Run setup once (builds the 3 tabs)", [
    Paragraph("In the function dropdown at the top, select <b>setup</b>, then click <b>Run</b>.", BODY),
    Paragraph("A permission prompt appears (normal for your own script):", BODY),
    Paragraph("• <b>Review permissions</b> &rarr; choose your Google account", BULLET),
    Paragraph("• Click <b>Advanced</b> &rarr; <b>Go to (project) (unsafe)</b> &rarr; <b>Allow</b>", BULLET),
    Paragraph("Back in the sheet you'll now see three tabs: <b>Homepage Inquiries</b>, "
              "<b>Contact Page Quote Requests</b>, and <b>Booking Requests</b>.", BODY),
])

S += step_card(5, "Deploy as a Web App (this creates the URL)", [
    Paragraph("In Apps Script, click <b>Deploy &rarr; New deployment</b>.", BODY),
    Paragraph("Click the gear icon (top-left of the dialog) and choose <b>Web app</b>. Set:", BODY),
    Paragraph("• <b>Execute as:</b> Me", BULLET),
    Paragraph("• <b>Who has access:</b> Anyone &nbsp;(required, or the site can't reach it)", BULLET),
    Paragraph("Click <b>Deploy</b>, approve if asked, then <b>copy the Web app URL</b>. It looks like:", BODY),
    code_box("https://script.google.com/macros/s/AKfycb..../exec"),
])

S += step_card(6, "Give the URL to the website", [
    Paragraph("In Vercel &rarr; your project &rarr; <b>Settings &rarr; Environment Variables</b>, add:", BODY),
    code_box("GOOGLE_SHEETS_WEBHOOK_URL = https://script.google.com/macros/s/AKfycb..../exec"),
    Paragraph("Click <b>Save</b>, then <b>Redeploy</b>. Submissions will now land in the sheet automatically.", BODY),
])

S.append(Spacer(1, 4))
S.append(callout(
    "<b>Editing the script later?</b> You must redeploy for changes to take effect: "
    "<b>Deploy &rarr; Manage deployments &rarr; Edit &rarr; Version: New version &rarr; Deploy.</b> "
    "The <font name='Courier'>/exec</font> URL stays the same."))
S.append(Spacer(1, 8))
S.append(Paragraph("Questions? Send the Web app URL to the website team and they'll confirm a live test submission.", SUB))

doc.build(S)
print("WROTE", OUT)
