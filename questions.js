// Question bank. Each question: id, type, en/ar title, optional help, options [{v,en,ar}].
// Types: single, multi (max), scale (pole labels), text, long, palette, font, tone, files (upload to Drive).
// showIf: {q, in:[...]} shows only when matched; {any:[...]} = OR of conditions.
window.QUESTIONNAIRE = {
  version: "2026-11-21c",
  sections: [
    {
      id: "start",
      en: "About you and the brand",
      ar: "عنك وعن البراند",
      introEn: "Takes about 15 minutes. Most answers are one tap. There are no right answers, only honest ones.",
      introAr: "هياخد حوالي ١٥ دقيقة، ومعظم الإجابات بضغطة واحدة. مفيش إجابة صح وإجابة غلط، المهم تكون صريح.",
      questions: [
        { id: "respondent_name", type: "text", required: true, en: "Your name", ar: "اسمك" },
        { id: "contact", type: "text", required: true, en: "Email or WhatsApp number", ar: "الإيميل أو رقم الواتساب" },
        { id: "respondent_role", type: "single", required: true, en: "Your role in the brand", ar: "دورك في البراند", options: [
          { v: "founder", en: "Founder or co-founder", ar: "مؤسس أو شريك مؤسس" },
          { v: "manager", en: "Manager or team member", ar: "مدير أو عضو في الفريق" },
          { v: "marketing", en: "Marketing or social media", ar: "تسويق أو سوشيال ميديا" },
          { v: "agency", en: "Agency or freelancer working for the brand", ar: "وكالة أو فريلانسر شغال للبراند" } ] },
        { id: "industry", type: "single", required: true, en: "What industry is the brand in?", ar: "البراند في أنهي مجال؟", options: [
          { v: "fashion", en: "Fashion and clothing", ar: "أزياء وملابس" },
          { v: "food", en: "Food and drink (restaurant, café, food brand)", ar: "أكل ومشروبات (مطعم، كافيه، منتج غذائي)" },
          { v: "beauty", en: "Beauty, skincare and fragrance", ar: "تجميل وعناية بالبشرة وعطور" },
          { v: "health", en: "Health, fitness and wellness", ar: "صحة ولياقة وعافية" },
          { v: "tech", en: "Tech, app or software", ar: "تكنولوجيا أو تطبيق أو سوفتوير" },
          { v: "services", en: "Professional services (consulting, legal, finance)", ar: "خدمات مهنية (استشارات، قانون، مالية)" },
          { v: "retail", en: "Retail or online store", ar: "تجارة تجزئة أو متجر أونلاين" },
          { v: "hospitality", en: "Hospitality, travel and events", ar: "ضيافة وسياحة وإيفنتات" },
          { v: "education", en: "Education and training", ar: "تعليم وتدريب" },
          { v: "realestate", en: "Real estate and interiors", ar: "عقارات وديكور" },
          { v: "creative", en: "Creative, media and entertainment", ar: "إبداع وميديا وترفيه" },
          { v: "other", en: "Other", ar: "مجال تاني" } ] },
        { id: "industry_other", type: "text", required: true, showIf: { q: "industry", in: ["other"] }, en: "Which industry?", ar: "أنهي مجال؟" },
        { id: "offer_type", type: "single", required: true, en: "What do you sell?", ar: "بتبيع إيه؟", options: [
          { v: "product", en: "Physical products", ar: "منتجات ملموسة" },
          { v: "service", en: "Services", ar: "خدمات" },
          { v: "digital", en: "Digital products or an app", ar: "منتجات رقمية أو تطبيق" },
          { v: "place", en: "A place people visit (shop, venue, clinic)", ar: "مكان الناس بتروحه (محل، مكان، عيادة)" },
          { v: "mix", en: "A mix of these", ar: "خليط من دول" } ] },
        { id: "status", type: "single", required: true, en: "Where is the brand today?", ar: "البراند فين النهارده؟", options: [
          { v: "idea", en: "Just an idea. No name yet.", ar: "لسه فكرة، ومفيش اسم." },
          { v: "named", en: "It has a name, but hasn't launched.", ar: "ليه اسم، بس لسه مبدأش." },
          { v: "selling", en: "Already running, with customers.", ar: "شغال فعلاً وعنده عملاء." } ] },
        { id: "goal", type: "single", required: true, en: "What do you want from this branding work?", ar: "عايز إيه من شغل البراندنج ده؟", options: [
          { v: "launch", en: "A full identity to launch with", ar: "هوية كاملة نبدأ بيها" },
          { v: "starter", en: "A simple starter kit to start fast", ar: "حاجة بسيطة نبدأ بيها بسرعة" },
          { v: "refresh", en: "Refresh what we have, keep it recognisable", ar: "نجدد اللي عندنا من غير ما نغيّره خالص" },
          { v: "rebrand", en: "Start over with a new look", ar: "نبدأ من الأول بشكل جديد" } ] }
      ]
    },
    {
      id: "existing",
      showIf: { q: "status", in: ["named", "selling"] },
      en: "What already exists",
      ar: "اللي موجود حالياً",
      questions: [
        { id: "brand_name", type: "text", required: true, en: "Brand name, written the way you write it", ar: "اسم البراند، مكتوب زي ما بتكتبه" },
        { id: "brand_links", type: "text", en: "Instagram, TikTok or website link (optional)", ar: "لينك إنستجرام أو تيك توك أو الموقع (اختياري)" },
        { id: "keep", type: "multi", en: "What must stay as it is?", ar: "إيه اللي لازم يفضل زي ما هو؟", help: { en: "Pick any.", ar: "اختار اللي ينطبق." }, options: [
          { v: "name", en: "The name", ar: "الاسم" },
          { v: "logo", en: "The logo", ar: "اللوجو" },
          { v: "colours", en: "The colours", ar: "الألوان" },
          { v: "handle", en: "The social handle", ar: "اسم الأكونت" },
          { v: "nothing", en: "Nothing, everything can change", ar: "ولا حاجة، كله ممكن يتغير", exclusive: true } ] },
        { id: "logo_happy", type: "single", en: "How do you feel about your current logo?", ar: "رأيك في اللوجو الحالي؟", options: [
          { v: "love", en: "Love it", ar: "بحبه جداً" },
          { v: "ok", en: "It's fine, could be better", ar: "كويس بس ممكن يبقى أحسن" },
          { v: "dislike", en: "Don't like it", ar: "مش عاجبني" },
          { v: "none", en: "We don't have one", ar: "معندناش لوجو" } ] },
        { id: "have_assets", type: "multi", en: "What do you already have?", ar: "إيه اللي عندك بالفعل؟", help: { en: "Pick any.", ar: "اختار اللي ينطبق." }, options: [
          { v: "logo_vector", en: "Logo as a vector file (AI, SVG, PDF)", ar: "لوجو فيكتور (AI أو SVG أو PDF)" },
          { v: "logo_image", en: "Logo as an image only (PNG, JPG)", ar: "لوجو صورة بس (PNG أو JPG)" },
          { v: "colours", en: "Exact colour codes", ar: "أكواد الألوان بالظبط" },
          { v: "fonts", en: "Chosen fonts", ar: "خطوط متحددة" },
          { v: "photos", en: "Photos of the product, place or team", ar: "صور للمنتج أو المكان أو الفريق" },
          { v: "packaging", en: "Packaging, labels or printed items", ar: "تغليف أو ليبلز أو مطبوعات" },
          { v: "guidelines", en: "A brand guide", ar: "دليل للهوية" },
          { v: "nothing", en: "None of these", ar: "ولا حاجة من دول", exclusive: true } ] },
        { id: "uploads", type: "files", showIf: { q: "have_assets", in: ["logo_vector", "logo_image", "colours", "fonts", "photos", "packaging", "guidelines"] }, en: "Upload those files", ar: "ارفع الملفات دي", help: { en: "Logos, brand guides, photos or fonts. Up to 20 files, 10 MB each. PNG, JPG, SVG, PDF, AI, EPS, PSD or font files.", ar: "لوجوهات أو دليل الهوية أو صور أو خطوط. لحد ٢٠ ملف، كل ملف لحد ١٠ ميجا. PNG أو JPG أو SVG أو PDF أو AI أو EPS أو PSD أو ملفات خطوط." } },
        { id: "assets_link", type: "text", showIf: { q: "have_assets", in: ["logo_vector", "logo_image", "colours", "fonts", "photos", "packaging", "guidelines"] }, en: "Files too big? Share a folder link instead (optional)", ar: "الملفات كبيرة؟ ابعت لينك فولدر بدالها (اختياري)", help: { en: "Google Drive or Dropbox, set so anyone with the link can view.", ar: "جوجل درايف أو دروبوكس، وخلّي اللينك متاح لأي حد معاه يشوفه." } },
        { id: "rename_open", type: "single", en: "Would you consider a new name?", ar: "ممكن تفكر في اسم جديد؟", options: [
          { v: "no", en: "No, the name stays", ar: "لا، الاسم ثابت" },
          { v: "maybe", en: "Maybe, if there's a strong reason", ar: "ممكن لو فيه سبب قوي" },
          { v: "yes", en: "Yes, I'm open to it", ar: "أيوه، معنديش مشكلة" } ] },
        { id: "trademark", type: "single", en: "Is the name registered as a trademark?", ar: "الاسم متسجل كعلامة تجارية؟", options: [
          { v: "yes", en: "Yes", ar: "أيوه" },
          { v: "in_progress", en: "In progress", ar: "جاري التسجيل" },
          { v: "no", en: "No", ar: "لا" },
          { v: "unsure", en: "Not sure", ar: "مش متأكد" } ] },
        { id: "followers", type: "single", showIf: { q: "status", in: ["selling"] }, en: "Followers on your main social account", ar: "عدد المتابعين على الأكونت الأساسي", options: [
          { v: "lt1k", en: "Under 1,000", ar: "أقل من ١٠٠٠" },
          { v: "1_10k", en: "1,000–10,000", ar: "من ١٠٠٠ لـ ١٠ آلاف" },
          { v: "10_50k", en: "10,000–50,000", ar: "من ١٠ آلاف لـ ٥٠ ألف" },
          { v: "gt50k", en: "Over 50,000", ar: "أكتر من ٥٠ ألف" } ] },
        { id: "team_size", type: "single", showIf: { q: "status", in: ["selling"] }, en: "Team size", ar: "حجم الفريق", options: [
          { v: "solo", en: "Just me", ar: "أنا لوحدي" },
          { v: "2_5", en: "2–5 people", ar: "من ٢ لـ ٥" },
          { v: "6_20", en: "6–20 people", ar: "من ٦ لـ ٢٠" },
          { v: "gt20", en: "More than 20", ar: "أكتر من ٢٠" } ] },
        { id: "what_works", type: "long", showIf: { q: "status", in: ["selling"] }, en: "What do customers already like about the brand?", ar: "العملاء بيحبوا إيه في البراند دلوقتي؟" }
      ]
    },
    {
      id: "core",
      en: "Why the brand exists",
      ar: "ليه البراند موجود",
      questions: [
        { id: "why", type: "multi", max: 2, required: true, en: "Why does this brand exist?", ar: "ليه البراند ده موجود؟", help: { en: "Pick up to 2.", ar: "اختار لحد ٢." }, options: [
          { v: "gap", en: "What I wanted didn't exist", ar: "اللي كنت عايزه مكانش موجود" },
          { v: "quality", en: "It can be done better than what's on offer", ar: "ممكن يتعمل أحسن من الموجود" },
          { v: "price", en: "Good things shouldn't cost this much", ar: "الحاجة الحلوة مش لازم تبقى غالية كده" },
          { v: "identity", en: "To show our culture in a new way", ar: "نقدّم ثقافتنا بشكل جديد" },
          { v: "community", en: "To build a community around something", ar: "نعمل كوميونيتي حوالين حاجة" },
          { v: "problem", en: "To solve a problem people have", ar: "نحل مشكلة عند الناس" },
          { v: "business", en: "It's a good business opportunity", ar: "فرصة بيزنس كويسة" } ] },
        { id: "promise", type: "single", required: true, en: "Which sentence is closest to the brand's promise?", ar: "أنهي جملة أقرب لوعد البراند؟", options: [
          { v: "confidence", en: "You'll feel more confident", ar: "هتحس بثقة أكتر" },
          { v: "easy", en: "We make life easier", ar: "بنسهّل حياتك" },
          { v: "standout", en: "You'll stand out", ar: "هتبقى مميز" },
          { v: "belong", en: "You're part of something", ar: "انت جزء من حاجة أكبر" },
          { v: "trust", en: "You can rely on us", ar: "تقدر تعتمد علينا" },
          { v: "proud", en: "Proudly local", ar: "محلي وبفخر" },
          { v: "value", en: "Real quality for a fair price", ar: "جودة حقيقية بسعر معقول" },
          { v: "joy", en: "A moment of joy", ar: "لحظة مبسوطة" } ] },
        { id: "values", type: "multi", max: 3, required: true, en: "Pick the 3 values the brand will never break", ar: "اختار ٣ قيم البراند عمره ما يتنازل عنها", options: [
          { v: "quality", en: "Quality", ar: "الجودة" },
          { v: "honesty", en: "Honesty", ar: "الصدق" },
          { v: "boldness", en: "Boldness", ar: "الجرأة" },
          { v: "simplicity", en: "Simplicity", ar: "البساطة" },
          { v: "heritage", en: "Heritage", ar: "الأصالة" },
          { v: "inclusion", en: "Everyone is welcome", ar: "مكان لكل الناس" },
          { v: "sustain", en: "Sustainability", ar: "الاستدامة" },
          { v: "craft", en: "Craftsmanship", ar: "الحِرفة والصنعة" },
          { v: "innovation", en: "Innovation", ar: "الابتكار" },
          { v: "care", en: "Care", ar: "الاهتمام بالناس" },
          { v: "fun", en: "Fun", ar: "المتعة" },
          { v: "excellence", en: "Excellence", ar: "التميّز" } ] },
        { id: "success_12m", type: "single", required: true, en: "What would success look like in 12 months?", ar: "النجاح بعد ١٢ شهر يبقى شكله إيه؟", options: [
          { v: "revenue", en: "Steady income that covers costs", ar: "دخل ثابت يغطي المصاريف" },
          { v: "growth", en: "Fast growth in customers", ar: "زيادة سريعة في العملاء" },
          { v: "known", en: "A name people recognise", ar: "اسم الناس تعرفه" },
          { v: "premium", en: "Seen as the premium choice", ar: "يتشاف كأفخم اختيار" },
          { v: "expand", en: "Expanding to a new country or city", ar: "التوسع لبلد أو مدينة جديدة" },
          { v: "investment", en: "Ready for investment", ar: "جاهزين لاستثمار" } ] },
        { id: "three_words", type: "text", en: "Describe the brand in 3 words (optional)", ar: "وصّف البراند في ٣ كلمات (اختياري)" },
        { id: "founder_story", type: "long", en: "In one line: how did this start? (optional)", ar: "في سطر واحد: الفكرة بدأت إزاي؟ (اختياري)" }
      ]
    },
    {
      id: "offer",
      en: "What you offer",
      ar: "بتقدّم إيه",
      questions: [
        { id: "main_offer", type: "text", required: true, en: "Your main product or service, in one line", ar: "المنتج أو الخدمة الأساسية في سطر واحد" },
        { id: "hero_product", type: "text", en: "The one thing you want to be known for (optional)", ar: "الحاجة الواحدة اللي عايز الناس تعرفك بيها (اختياري)" },
        { id: "price_tier", type: "single", required: true, en: "Price level in your market", ar: "مستوى السعر في السوق", options: [
          { v: "budget", en: "Budget", ar: "اقتصادي" },
          { v: "mid", en: "Mid-range", ar: "متوسط" },
          { v: "premium", en: "Premium", ar: "بريميوم" },
          { v: "luxury", en: "Luxury", ar: "فاخر" } ] },
        { id: "price_vs", type: "single", required: true, en: "Your prices compared with similar brands", ar: "أسعارك مقارنة ببراندات زيك", options: [
          { v: "lower", en: "Lower", ar: "أقل" },
          { v: "same", en: "About the same", ar: "زيهم تقريباً" },
          { v: "higher", en: "Higher", ar: "أعلى" },
          { v: "unsure", en: "Not sure", ar: "مش متأكد" } ] },
        { id: "rhythm", type: "single", en: "How often is something new launched?", ar: "بتطلّعوا حاجة جديدة كل قد إيه؟", options: [
          { v: "drops", en: "Limited releases or drops", ar: "إصدارات أو دروبات محدودة" },
          { v: "seasons", en: "Every season", ar: "كل موسم" },
          { v: "core", en: "A fixed core offer that rarely changes", ar: "عرض ثابت مش بيتغير كتير" },
          { v: "ongoing", en: "Constantly, small updates", ar: "باستمرار، تحديثات صغيرة" } ] },
        { id: "made_local", type: "single", en: "Is \"made here\" or \"from here\" part of the story?", ar: "\"صناعة محلية\" أو \"من هنا\" جزء من القصة؟", options: [
          { v: "central", en: "Yes, front and centre", ar: "أيوه، وفي الواجهة" },
          { v: "quiet", en: "Yes, but quietly", ar: "أيوه، بس بهدوء" },
          { v: "no", en: "No", ar: "لا" } ] }
      ]
    },
    {
      id: "fashion",
      showIf: { q: "industry", in: ["fashion"] },
      en: "The clothes",
      ar: "الهدوم",
      questions: [
        { id: "category", type: "multi", max: 3, required: true, en: "What do you make?", ar: "بتعمل إيه؟", help: { en: "Pick up to 3.", ar: "اختار لحد ٣." }, options: [
          { v: "streetwear", en: "Streetwear (hoodies, graphic tees, cargos)", ar: "ستريت وير (هوديز، تيشيرتات مطبوعة، كارجو)" },
          { v: "basics", en: "Everyday basics", ar: "أساسيات يومية" },
          { v: "modest", en: "Modest wear", ar: "ملابس محتشمة" },
          { v: "smart", en: "Smart casual or tailoring", ar: "سمارت كاجوال أو تفصيل" },
          { v: "athleisure", en: "Sport and athleisure", ar: "رياضي وأثليجر" },
          { v: "kids", en: "Kidswear", ar: "ملابس أطفال" },
          { v: "accessories", en: "Accessories (caps, bags)", ar: "إكسسوارات (كابات، شنط)" } ] },
        { id: "gender", type: "single", required: true, en: "Who is it cut for?", ar: "معمول لمين؟", options: [
          { v: "men", en: "Men", ar: "رجالي" },
          { v: "women", en: "Women", ar: "حريمي" },
          { v: "unisex", en: "Unisex", ar: "يونيسكس" },
          { v: "both", en: "Separate men's and women's lines", ar: "خط رجالي وخط حريمي منفصلين" } ] },
        { id: "fit", type: "multi", max: 2, required: true, en: "The fit", ar: "القَصّة", help: { en: "Pick up to 2.", ar: "اختار لحد ٢." }, options: [
          { v: "oversized", en: "Oversized", ar: "أوفر سايز" },
          { v: "relaxed", en: "Relaxed", ar: "واسع شوية" },
          { v: "regular", en: "Regular", ar: "عادي" },
          { v: "slim", en: "Slim", ar: "ضيق" },
          { v: "modest", en: "Loose and long for modesty", ar: "واسع وطويل للاحتشام" } ] },
        { id: "fabric", type: "single", en: "Fabric quality", ar: "جودة القماش", options: [
          { v: "heavy", en: "Heavyweight premium cotton", ar: "قطن تقيل وبريميوم" },
          { v: "standard", en: "Good standard cotton", ar: "قطن كويس عادي" },
          { v: "technical", en: "Technical and sport fabrics", ar: "خامات رياضية وتكنيكال" },
          { v: "natural", en: "Linen and natural fibres", ar: "كتان وخامات طبيعية" },
          { v: "mixed", en: "Depends on the piece", ar: "حسب القطعة" } ] },
        { id: "garment_colours", type: "single", required: true, en: "Colours of the clothes themselves", ar: "ألوان الهدوم نفسها", options: [
          { v: "black_white", en: "Mostly black and white", ar: "أغلبها أبيض وأسود" },
          { v: "neutrals", en: "Neutrals (beige, grey, olive)", ar: "ألوان هادية (بيج، رمادي، زيتي)" },
          { v: "bold", en: "Bold colours", ar: "ألوان قوية" },
          { v: "seasonal", en: "Changes every drop", ar: "بتتغير مع كل دروب" } ] },
        { id: "graphics", type: "multi", max: 2, required: true, en: "Graphics on the clothes", ar: "الرسومات على الهدوم", help: { en: "Pick up to 2.", ar: "اختار لحد ٢." }, options: [
          { v: "plain", en: "Plain, no graphics", ar: "سادة من غير رسومات" },
          { v: "logo", en: "Logo only", ar: "اللوجو بس" },
          { v: "type", en: "Words and slogans", ar: "كلام وجمل" },
          { v: "arabic", en: "Arabic lettering and calligraphy", ar: "كتابة وخط عربي" },
          { v: "illustration", en: "Illustrations", ar: "رسومات" },
          { v: "photo", en: "Photo prints", ar: "طباعة صور" },
          { v: "allover", en: "All-over patterns", ar: "نقشة على القطعة كلها" } ] },
        { id: "sizes", type: "single", en: "Size range", ar: "المقاسات", options: [
          { v: "core", en: "S to XL", ar: "من S لـ XL" },
          { v: "wide", en: "XS to XXL", ar: "من XS لـ XXL" },
          { v: "plus", en: "Including plus sizes (3XL+)", ar: "بما فيها المقاسات الكبيرة (3XL وأكتر)" },
          { v: "one", en: "One size", ar: "مقاس واحد" } ] },
        { id: "launch_pieces", type: "single", en: "How many designs at launch?", ar: "كام تصميم في البداية؟", options: [
          { v: "1_5", en: "1–5", ar: "١–٥" },
          { v: "6_15", en: "6–15", ar: "٦–١٥" },
          { v: "16_30", en: "16–30", ar: "١٦–٣٠" },
          { v: "gt30", en: "More than 30", ar: "أكتر من ٣٠" } ] },
        { id: "production", type: "single", en: "Who makes the clothes?", ar: "مين بيصنع الهدوم؟", options: [
          { v: "own", en: "Our own workshop", ar: "ورشة خاصة بينا" },
          { v: "factory", en: "A factory we work with", ar: "مصنع بنتعامل معاه" },
          { v: "blanks", en: "We print on ready-made blanks", ar: "بنطبع على هدوم جاهزة سادة" },
          { v: "pod", en: "Print on demand", ar: "طباعة حسب الطلب" },
          { v: "unsure", en: "Not decided", ar: "لسه مقررتش" } ] },
        { id: "logo_on_garment", type: "multi", required: true, en: "Where will the logo show on the clothes?", ar: "اللوجو هيظهر فين على الهدوم؟", options: [
          { v: "neck", en: "Neck label only", ar: "ليبل الرقبة بس" },
          { v: "small_chest", en: "Small on the chest", ar: "صغير على الصدر" },
          { v: "big_print", en: "Big print, front or back", ar: "طبعة كبيرة قدام أو ورا" },
          { v: "embroidery", en: "Embroidery", ar: "تطريز" },
          { v: "sleeve", en: "Sleeve or hem tab", ar: "على الكُم أو ليبل جانبي" },
          { v: "hidden", en: "Hidden, the design speaks", ar: "مش باين، التصميم بيتكلم" } ] }
      ]
    },
    {
      id: "customer",
      en: "Your customer",
      ar: "العميل",
      questions: [
        { id: "b2", type: "single", required: true, en: "Who are your customers?", ar: "عملاءك مين؟", options: [
          { v: "b2c", en: "Individuals", ar: "أفراد" },
          { v: "b2b", en: "Businesses", ar: "شركات" },
          { v: "both", en: "Both", ar: "الاتنين" } ] },
        { id: "company_size", type: "multi", showIf: { q: "b2", in: ["b2b", "both"] }, en: "What size of business do you sell to?", ar: "بتبيع لشركات حجمها إيه؟", options: [
          { v: "small", en: "Small businesses and startups", ar: "شركات صغيرة وستارت أبس" },
          { v: "mid", en: "Mid-size companies", ar: "شركات متوسطة" },
          { v: "large", en: "Large corporates", ar: "شركات كبيرة" },
          { v: "gov", en: "Government", ar: "جهات حكومية" } ] },
        { id: "decision_maker", type: "text", showIf: { q: "b2", in: ["b2b", "both"] }, en: "Who decides to buy at those businesses? (job title)", ar: "مين اللي بياخد قرار الشراء في الشركات دي؟ (المسمى الوظيفي)" },
        { id: "age", type: "multi", max: 2, showIf: { q: "b2", in: ["b2c", "both"] }, required: true, en: "Their age", ar: "سنّهم", help: { en: "Pick up to 2.", ar: "اختار لحد ٢." }, options: [
          { v: "u18", en: "Under 18", ar: "أقل من ١٨" },
          { v: "18_24", en: "18–24", ar: "١٨–٢٤" },
          { v: "25_34", en: "25–34", ar: "٢٥–٣٤" },
          { v: "35_44", en: "35–44", ar: "٣٥–٤٤" },
          { v: "45_54", en: "45–54", ar: "٤٥–٥٤" },
          { v: "55p", en: "55+", ar: "+٥٥" } ] },
        { id: "cust_gender", type: "single", showIf: { q: "b2", in: ["b2c", "both"] }, en: "Mostly men or women?", ar: "أغلبهم رجالة ولا ستات؟", options: [
          { v: "men", en: "Mostly men", ar: "أغلبهم رجالة" },
          { v: "women", en: "Mostly women", ar: "أغلبهم ستات" },
          { v: "both", en: "Both equally", ar: "الاتنين بالتساوي" } ] },
        { id: "lifestyle", type: "multi", max: 3, showIf: { q: "b2", in: ["b2c", "both"] }, required: true, en: "What describes them best?", ar: "إيه أكتر حاجة بتوصفهم؟", help: { en: "Pick up to 3.", ar: "اختار لحد ٣." }, options: [
          { v: "student", en: "Students", ar: "طلبة" },
          { v: "young_pro", en: "Young professionals", ar: "شباب لسه بادئ شغل" },
          { v: "established", en: "Established professionals", ar: "محترفين في مناصب كبيرة" },
          { v: "creative", en: "Creatives", ar: "مبدعين" },
          { v: "sport", en: "Active and sporty", ar: "رياضيين ونشيطين" },
          { v: "parents", en: "Parents and families", ar: "أهالي وعائلات" },
          { v: "trend", en: "Trend followers", ar: "متابعين التريندات" },
          { v: "quiet", en: "Prefer quiet, simple things", ar: "بيحبوا الحاجات الهادية البسيطة" },
          { v: "affluent", en: "High earners", ar: "دخلهم عالي" } ] },
        { id: "spend", type: "single", required: true, en: "How do they think about money?", ar: "بيفكروا إزاي في الفلوس؟", options: [
          { v: "deal", en: "Always look for the best price", ar: "دايماً بيدوروا على أحسن سعر" },
          { v: "value", en: "Will pay more if it lasts or works better", ar: "يدفعوا أكتر لو الحاجة هتعيش أو أحسن" },
          { v: "brand", en: "Will pay for the name and the experience", ar: "يدفعوا عشان الاسم والتجربة" },
          { v: "rare", en: "Will pay a lot for something rare", ar: "يدفعوا كتير في حاجة نادرة" } ] },
        { id: "pain", type: "text", en: "The biggest frustration your customer has before finding you", ar: "أكبر مشكلة عند العميل قبل ما يلاقيك" },
        { id: "where", type: "multi", required: true, en: "Where are your customers?", ar: "عملاءك فين؟", options: [
          { v: "egypt", en: "Egypt", ar: "مصر" },
          { v: "uae", en: "UAE", ar: "الإمارات" },
          { v: "ksa", en: "Saudi Arabia", ar: "السعودية" },
          { v: "gcc", en: "Rest of the Gulf", ar: "باقي الخليج" },
          { v: "mena", en: "Rest of the Arab world", ar: "باقي الدول العربية" },
          { v: "europe_us", en: "Europe or North America", ar: "أوروبا أو أمريكا الشمالية" },
          { v: "global", en: "Anywhere, online", ar: "أي مكان، أونلاين" } ] },
        { id: "local_reach", type: "single", en: "How far does the brand reach?", ar: "البراند بيوصل لحد فين؟", options: [
          { v: "neighbourhood", en: "One neighbourhood or city", ar: "حي أو مدينة واحدة" },
          { v: "country", en: "One country", ar: "بلد واحد" },
          { v: "region", en: "Several countries in the region", ar: "كذا بلد في المنطقة" },
          { v: "global", en: "Worldwide", ar: "العالم كله" } ] },
        { id: "social_use", type: "multi", max: 2, required: true, en: "Where does your customer spend most time online?", ar: "العميل بيقضي وقته أونلاين فين أكتر؟", help: { en: "Pick up to 2.", ar: "اختار لحد ٢." }, options: [
          { v: "instagram", en: "Instagram", ar: "إنستجرام" },
          { v: "tiktok", en: "TikTok", ar: "تيك توك" },
          { v: "facebook", en: "Facebook", ar: "فيسبوك" },
          { v: "snapchat", en: "Snapchat", ar: "سناب شات" },
          { v: "youtube", en: "YouTube", ar: "يوتيوب" },
          { v: "linkedin", en: "LinkedIn", ar: "لينكد إن" },
          { v: "x", en: "X (Twitter)", ar: "إكس (تويتر)" } ] },
        { id: "buy_trigger", type: "multi", max: 2, en: "What makes them buy?", ar: "إيه اللي بيخليهم يشتروا؟", help: { en: "Pick up to 2.", ar: "اختار لحد ٢." }, options: [
          { v: "friends", en: "Recommendations from people they know", ar: "ترشيح من ناس يعرفوهم" },
          { v: "influencer", en: "Influencers and creators", ar: "إنفلونسرز وكرييتورز" },
          { v: "ads", en: "Ads", ar: "إعلانات" },
          { v: "search", en: "Searching on Google or maps", ar: "البحث على جوجل أو الخرايط" },
          { v: "discount", en: "Discounts and offers", ar: "خصومات وعروض" },
          { v: "reviews", en: "Reviews and ratings", ar: "تقييمات وآراء" },
          { v: "occasion", en: "An occasion or season", ar: "مناسبة أو موسم" } ] },
        { id: "channels", type: "multi", required: true, en: "Where do you sell?", ar: "بتبيع فين؟", options: [
          { v: "social", en: "Instagram, TikTok and WhatsApp", ar: "إنستجرام وتيك توك وواتساب" },
          { v: "website", en: "Own website", ar: "موقع خاص بينا" },
          { v: "app", en: "Own app", ar: "تطبيق خاص بينا" },
          { v: "marketplace", en: "Marketplaces and delivery apps", ar: "مواقع وتطبيقات بيع وتوصيل" },
          { v: "location", en: "Our own shop, branch or office", ar: "محل أو فرع أو مكتب خاص بينا" },
          { v: "popup", en: "Pop-ups, bazaars and events", ar: "بوب أب وبازارات وإيفنتات" },
          { v: "direct", en: "Direct sales and meetings", ar: "بيع مباشر ومقابلات" },
          { v: "resellers", en: "Other shops or resellers", ar: "محلات تانية أو موزعين" } ] },
        { id: "they_use", type: "text", en: "Brands your customer already loves (any industry)", ar: "براندات العميل بيحبها (في أي مجال)" }
      ]
    },
    {
      id: "position",
      en: "Where you stand",
      ar: "مكانك في السوق",
      questions: [
        { id: "difference", type: "single", required: true, en: "The main reason someone picks you over others", ar: "السبب الأساسي اللي يخلي حد يختارك انت", options: [
          { v: "design", en: "Design and look", ar: "التصميم والشكل" },
          { v: "quality", en: "Quality", ar: "الجودة" },
          { v: "price", en: "Price", ar: "السعر" },
          { v: "service", en: "Service and experience", ar: "الخدمة والتجربة" },
          { v: "speed", en: "Speed and convenience", ar: "السرعة والسهولة" },
          { v: "expertise", en: "Expertise", ar: "الخبرة" },
          { v: "story", en: "The story and meaning", ar: "القصة والمعنى" },
          { v: "community", en: "The people around the brand", ar: "الناس اللي حوالين البراند" } ] },
        { id: "competitors", type: "text", en: "2–3 brands you see as competition", ar: "٢ أو ٣ براندات شايفهم منافسين" },
        { id: "admire", type: "text", en: "A brand you admire (any industry) and why", ar: "براند معجب بيه (في أي مجال) وليه" },
        { id: "feel", type: "multi", max: 3, required: true, en: "How should people feel after dealing with you?", ar: "الناس تحس بإيه بعد ما تتعامل معاك؟", help: { en: "Pick up to 3.", ar: "اختار لحد ٣." }, options: [
          { v: "confident", en: "Confident", ar: "واثقة من نفسها" },
          { v: "relaxed", en: "Relaxed", ar: "مرتاحة" },
          { v: "proud", en: "Proud", ar: "فخورة" },
          { v: "safe", en: "Safe and looked after", ar: "في أمان ومتطمنة" },
          { v: "inspired", en: "Inspired", ar: "عندها إلهام" },
          { v: "elegant", en: "Elegant", ar: "شيك" },
          { v: "playful", en: "Happy and playful", ar: "مبسوطة ومرحة" },
          { v: "smart", en: "Smart, like they made a good choice", ar: "ذكية، كأنها اختارت صح" },
          { v: "free", en: "Free", ar: "حرة" },
          { v: "rebellious", en: "Rebellious", ar: "متمردة" } ] },
        { id: "not", type: "multi", max: 3, required: true, en: "What must the brand never look like?", ar: "البراند عمره ما يبان إزاي؟", help: { en: "Pick up to 3.", ar: "اختار لحد ٣." }, options: [
          { v: "cheap", en: "Cheap", ar: "رخيص" },
          { v: "boring", en: "Boring", ar: "ممل" },
          { v: "try_hard", en: "Trying too hard", ar: "متكلّف" },
          { v: "snobby", en: "Snobbish", ar: "متعالي" },
          { v: "childish", en: "Childish", ar: "طفولي" },
          { v: "corporate", en: "Cold and corporate", ar: "رسمي وبارد" },
          { v: "copied", en: "A copy of a foreign brand", ar: "تقليد لبراند أجنبي" },
          { v: "old", en: "Old-fashioned", ar: "قديم" },
          { v: "aggressive", en: "Aggressive", ar: "عدواني" } ] }
      ]
    },
    {
      id: "personality",
      en: "Personality",
      ar: "الشخصية",
      introEn: "If the brand were a person, who would it be?",
      introAr: "لو البراند ده بني آدم، هيبقى مين؟",
      questions: [
        { id: "archetype", type: "single", required: true, en: "Pick the character closest to the brand", ar: "اختار الشخصية الأقرب للبراند", options: [
          { v: "rebel", en: "The rebel: breaks rules, says what others won't", ar: "المتمرد: بيكسر القواعد وبيقول اللي محدش بيقوله" },
          { v: "explorer", en: "The explorer: free, curious, always moving", ar: "المستكشف: حر وفضولي ودايماً في حركة" },
          { v: "creator", en: "The creator: original, makes things by hand", ar: "المبدع: أصلي وبيعمل الحاجة بإيده" },
          { v: "everyman", en: "The friend: down to earth, one of us", ar: "ابن البلد: بسيط وواحد مننا" },
          { v: "hero", en: "The hero: driven, tough, pushes limits", ar: "البطل: عنده إصرار وقوي وبيتحدى نفسه" },
          { v: "jester", en: "The joker: funny, never too serious", ar: "خفيف الدم: بيهزر ومش بياخد الدنيا جد أوي" },
          { v: "lover", en: "The romantic: beauty, feeling, detail", ar: "الرومانسي: الجمال والإحساس والتفاصيل" },
          { v: "sage", en: "The expert: knows the craft, quietly sure", ar: "الخبير: فاهم الصنعة وواثق بهدوء" },
          { v: "ruler", en: "The leader: premium, in control, sets the standard", ar: "القائد: فخم ومسيطر وبيحط المعايير" },
          { v: "caregiver", en: "The caregiver: warm, protective, generous", ar: "الحنون: دافي وبيهتم بالناس" },
          { v: "innocent", en: "The optimist: clean, honest, positive", ar: "المتفائل: نضيف وصريح وإيجابي" },
          { v: "magician", en: "The visionary: turns ideas into something new", ar: "صاحب الرؤية: بيحوّل الفكرة لحاجة جديدة" } ] },
        { id: "archetype2", type: "single", en: "And a second character, if one more fits (optional)", ar: "وشخصية تانية لو فيه واحدة كمان مناسبة (اختياري)", sameOptionsAs: "archetype" },
        { id: "s_classic", type: "scale", en: "Classic or modern?", ar: "كلاسيك ولا مودرن؟", poles: { en: ["Classic", "Modern"], ar: ["كلاسيك", "مودرن"] } },
        { id: "s_serious", type: "scale", en: "Playful or serious?", ar: "مرح ولا جاد؟", poles: { en: ["Playful", "Serious"], ar: ["مرح", "جاد"] } },
        { id: "s_loud", type: "scale", en: "Quiet or loud?", ar: "هادي ولا صاخب؟", poles: { en: ["Quiet", "Loud"], ar: ["هادي", "صاخب"] } },
        { id: "s_lux", type: "scale", en: "Accessible or exclusive?", ar: "في متناول الكل ولا حصري؟", poles: { en: ["Accessible", "Exclusive"], ar: ["في متناول الكل", "حصري"] } },
        { id: "s_local", type: "scale", en: "Local or global?", ar: "محلي ولا عالمي؟", poles: { en: ["Clearly local", "Could be from anywhere"], ar: ["محلي بوضوح", "ممكن يكون من أي حتة"] } },
        { id: "s_minimal", type: "scale", en: "Minimal or expressive?", ar: "بسيط ولا مليان تفاصيل؟", poles: { en: ["Minimal", "Expressive"], ar: ["بسيط", "مليان تفاصيل"] } },
        { id: "s_warm", type: "scale", en: "Warm or cool?", ar: "دافي ولا بارد؟", poles: { en: ["Warm and personal", "Cool and precise"], ar: ["دافي وقريب", "هادي ودقيق"] } },
        { id: "s_traditional", type: "scale", en: "Traditional or disruptive?", ar: "تقليدي ولا بيكسر القواعد؟", poles: { en: ["Traditional", "Disruptive"], ar: ["تقليدي", "بيكسر القواعد"] } },
        { id: "s_gender", type: "scale", en: "How should the brand feel?", ar: "البراند يحسّسك بإيه؟", poles: { en: ["Masculine", "Feminine"], ar: ["رجولي", "أنثوي"] }, help: { en: "The middle means neutral.", ar: "النص يعني محايد." } },
        { id: "music", type: "single", en: "If the brand were music, what would it be?", ar: "لو البراند مزيكا، هيبقى إيه؟", options: [
          { v: "rap", en: "Rap and hip-hop", ar: "راب وهيب هوب" },
          { v: "mahraganat", en: "Mahraganat", ar: "مهرجانات" },
          { v: "electronic", en: "House and electronic", ar: "هاوس وإلكترونيك" },
          { v: "indie", en: "Indie and alternative", ar: "إندي وألترناتيف" },
          { v: "pop", en: "Pop", ar: "بوب" },
          { v: "jazz", en: "Jazz and soul", ar: "جاز وسول" },
          { v: "tarab", en: "Classic tarab", ar: "طرب كلاسيكي" },
          { v: "classical", en: "Classical", ar: "موسيقى كلاسيكية" } ] },
        { id: "hangout", type: "single", en: "Where would the brand spend a Friday?", ar: "البراند يقضي يوم الجمعة فين؟", options: [
          { v: "cafe", en: "A local café", ar: "قهوة في الحي" },
          { v: "rooftop", en: "A rooftop party", ar: "حفلة على سطح" },
          { v: "gym", en: "The gym or a sports pitch", ar: "الجيم أو ملعب" },
          { v: "gallery", en: "A gallery or concert", ar: "معرض فني أو حفلة مزيكا" },
          { v: "nature", en: "Outdoors, beach or desert", ar: "في الطبيعة، بحر أو صحرا" },
          { v: "family", en: "Family lunch", ar: "غدا مع العيلة" },
          { v: "work", en: "Working on the next big thing", ar: "بيشتغل على الحاجة الجاية" } ] }
      ]
    },
    {
      id: "name",
      showIf: { any: [{ q: "status", in: ["idea"] }, { q: "rename_open", in: ["maybe", "yes"] }] },
      en: "The name",
      ar: "الاسم",
      questions: [
        { id: "name_lang", type: "single", required: true, en: "What language should the name be in?", ar: "الاسم يكون بأنهي لغة؟", options: [
          { v: "ar", en: "Arabic", ar: "عربي" },
          { v: "en", en: "English", ar: "إنجليزي" },
          { v: "works_both", en: "A word that sounds right in both", ar: "كلمة تنفع في اللغتين" },
          { v: "any", en: "No preference", ar: "مش فارقة" } ] },
        { id: "name_style", type: "multi", max: 2, required: true, en: "What kind of name?", ar: "نوع الاسم؟", help: { en: "Pick up to 2.", ar: "اختار لحد ٢." }, options: [
          { v: "real_word", en: "A real word with meaning", ar: "كلمة حقيقية ليها معنى" },
          { v: "descriptive", en: "Says what we do", ar: "بيقول إحنا بنعمل إيه" },
          { v: "slang", en: "Local slang", ar: "كلمة عامية" },
          { v: "invented", en: "An invented word", ar: "كلمة متألفة" },
          { v: "place", en: "A place or street", ar: "اسم مكان أو شارع" },
          { v: "person", en: "A person's name", ar: "اسم شخص" },
          { v: "numbers", en: "Letters or numbers", ar: "حروف أو أرقام" } ] },
        { id: "name_feel", type: "single", en: "What should the name feel like?", ar: "الاسم يدّي إحساس بإيه؟", options: [
          { v: "strong", en: "Strong", ar: "قوة" },
          { v: "friendly", en: "Friendly", ar: "قُرب ولطف" },
          { v: "elegant", en: "Elegant", ar: "شياكة" },
          { v: "mysterious", en: "Mysterious", ar: "غموض" },
          { v: "fun", en: "Fun", ar: "مرح" },
          { v: "clear", en: "Clear and simple", ar: "وضوح وبساطة" } ] },
        { id: "name_length", type: "single", en: "How long?", ar: "طوله قد إيه؟", options: [
          { v: "short", en: "Short, one or two syllables", ar: "قصير، مقطع أو اتنين" },
          { v: "medium", en: "One word, any length", ar: "كلمة واحدة بأي طول" },
          { v: "two", en: "Two words are fine", ar: "كلمتين عادي" } ] },
        { id: "name_domain", type: "single", en: "How important is a matching .com and social handle?", ar: "مهم قد إيه يبقى فيه .com واسم أكونت بنفس الاسم؟", options: [
          { v: "must", en: "Must have both", ar: "لازم الاتنين" },
          { v: "handle", en: "The social handle matters most", ar: "اسم الأكونت أهم" },
          { v: "flexible", en: "Flexible, small changes are fine", ar: "مرن، تعديل بسيط عادي" } ] },
        { id: "name_ideas", type: "long", en: "Any names or words you already like? (optional)", ar: "فيه أسامي أو كلمات عاجباك؟ (اختياري)" }
      ]
    },
    {
      id: "look",
      en: "The look",
      ar: "الشكل",
      questions: [
        { id: "palette", type: "palette", required: true, en: "Pick the colours that feel most like the brand", ar: "اختار الألوان الأقرب للبراند", options: [
          { v: "mono", en: "Black and white", ar: "أبيض وأسود", c: ["#111111", "#FFFFFF", "#9A9A9A"] },
          { v: "desert", en: "Desert and clay", ar: "صحرا وطين", c: ["#D9C3A0", "#9C5A3C", "#5B6236", "#2E2A26"] },
          { v: "nile", en: "Deep blue and sand", ar: "أزرق غامق ورملي", c: ["#1F3A5F", "#4F86B8", "#E6DCC8", "#B8902E"] },
          { v: "street", en: "Loud primaries", ar: "ألوان أساسية صريحة", c: ["#E23A2E", "#F3C13A", "#1D4ED8", "#111111"] },
          { v: "soft", en: "Soft and washed", ar: "هادية ومغسولة", c: ["#E9CFD6", "#C9DDE2", "#DCD6EA", "#7D8296"] },
          { v: "deep", en: "Deep and rich", ar: "غامقة وفخمة", c: ["#123B30", "#5E1F2A", "#C9A45C", "#EFE9DC"] },
          { v: "vintage", en: "Faded vintage", ar: "فينتج باهتة", c: ["#6E8291", "#C5B08F", "#A4493E", "#EAE2D3"] },
          { v: "fresh", en: "Fresh and bright", ar: "منعشة ومشرقة", c: ["#1FA37A", "#F7F3E8", "#FF8A3D", "#2A3F54"] },
          { v: "neon", en: "Dark with neon", ar: "غامق مع نيون", c: ["#16161D", "#3B3B4F", "#7CFF6B", "#FF4FD8"] },
          { v: "trust", en: "Calm and trustworthy", ar: "هادية وتطمّن", c: ["#0F4C81", "#7FA7C9", "#F2F5F8", "#2E3B4E"] } ] },
        { id: "colour_count", type: "single", required: true, en: "How many colours should the brand use?", ar: "البراند يستخدم كام لون؟", options: [
          { v: "one", en: "One signature colour plus black and white", ar: "لون مميز واحد مع الأبيض والأسود" },
          { v: "few", en: "Two or three colours", ar: "لونين أو تلاتة" },
          { v: "many", en: "A wide, colourful palette", ar: "ألوان كتير ومتنوعة" } ] },
        { id: "light_dark", type: "single", en: "Mostly light or dark?", ar: "فاتح ولا غامق في الغالب؟", options: [
          { v: "light", en: "Light", ar: "فاتح" },
          { v: "dark", en: "Dark", ar: "غامق" },
          { v: "both", en: "Both, depending on use", ar: "الاتنين حسب الاستخدام" } ] },
        { id: "colour_avoid", type: "text", en: "Any colour you never want to see on the brand? (optional)", ar: "فيه لون مش عايزه خالص؟ (اختياري)" },
        { id: "font", type: "font", required: true, en: "Which lettering feels right?", ar: "أنهي شكل خط مناسب؟", options: [
          { v: "geometric", en: "Clean and modern", ar: "نضيف ومودرن", lat: "Outfit", arf: "Tajawal", w: 600 },
          { v: "condensed", en: "Bold and tall", ar: "عريض وطويل", lat: "Anton", arf: "Lalezar", w: 400 },
          { v: "serif", en: "Editorial and refined", ar: "راقي وتحريري", lat: "DM Serif Display", arf: "Amiri", w: 400 },
          { v: "calligraphy", en: "Traditional calligraphy", ar: "خط عربي تقليدي", lat: "Cormorant Garamond", arf: "Aref Ruqaa", w: 600 },
          { v: "kufi", en: "Geometric heritage", ar: "كوفي هندسي", lat: "Syne", arf: "Reem Kufi", w: 700 },
          { v: "rounded", en: "Friendly and rounded", ar: "ودود ومدوّر", lat: "Fredoka", arf: "Marhey", w: 600 } ] },
        { id: "letter_case", type: "single", en: "How should the name be written in the logo?", ar: "الاسم يتكتب إزاي في اللوجو؟", help: { en: "For Latin letters.", ar: "للحروف الإنجليزي." }, options: [
          { v: "upper", en: "ALL CAPITALS", ar: "حروف كبيرة كلها (ALL CAPS)" },
          { v: "lower", en: "all lowercase", ar: "حروف صغيرة كلها (lowercase)" },
          { v: "title", en: "First letter capital", ar: "أول حرف كبير بس (Title)" },
          { v: "any", en: "Whatever looks best", ar: "اللي يطلع أحلى" } ] },
        { id: "logo_type", type: "single", required: true, en: "What kind of logo?", ar: "نوع اللوجو؟", options: [
          { v: "wordmark", en: "The name written in a distinctive way", ar: "الاسم مكتوب بشكل مميز" },
          { v: "monogram", en: "Initials or one letter", ar: "حروف أولى أو حرف واحد" },
          { v: "symbol", en: "A symbol next to the name", ar: "رمز جنب الاسم" },
          { v: "mascot", en: "A character or mascot", ar: "شخصية أو ماسكوت" },
          { v: "badge", en: "A badge or emblem", ar: "شعار على شكل ختم أو بادج" },
          { v: "unsure", en: "Not sure, show me options", ar: "مش متأكد، وريني اختيارات" } ] },
        { id: "logo_shape", type: "single", en: "Sharp or soft?", ar: "حاد ولا ناعم؟", options: [
          { v: "sharp", en: "Sharp angles and straight lines", ar: "زوايا حادة وخطوط مستقيمة" },
          { v: "round", en: "Soft curves and round shapes", ar: "منحنيات ناعمة وأشكال مدوّرة" },
          { v: "hand", en: "Hand-drawn and imperfect", ar: "مرسوم باليد ومش مثالي" },
          { v: "any", en: "No preference", ar: "مش فارقة" } ] },
        { id: "script", type: "single", required: true, en: "Arabic or English lettering in the logo?", ar: "اللوجو بالعربي ولا بالإنجليزي؟", options: [
          { v: "en", en: "English only", ar: "إنجليزي بس" },
          { v: "ar", en: "Arabic only", ar: "عربي بس" },
          { v: "en_main", en: "Both, English is the main one", ar: "الاتنين، والإنجليزي هو الأساسي" },
          { v: "ar_main", en: "Both, Arabic is the main one", ar: "الاتنين، والعربي هو الأساسي" },
          { v: "equal", en: "Both, equal weight", ar: "الاتنين بنفس الحجم" } ] },
        { id: "motifs", type: "single", en: "Cultural symbols or patterns?", ar: "رموز أو نقوش من ثقافتنا؟", options: [
          { v: "yes", en: "Yes, make them part of the brand", ar: "أيوه، تبقى جزء من البراند" },
          { v: "subtle", en: "Only as a subtle detail", ar: "كلمسة بسيطة بس" },
          { v: "no", en: "No, keep it abstract", ar: "لا، خليه بعيد عنها" } ] },
        { id: "motifs_which", type: "text", showIf: { q: "motifs", in: ["yes", "subtle"] }, en: "Any you have in mind? (optional)", ar: "فيه حاجة معينة في بالك؟ (اختياري)" },
        { id: "texture", type: "single", en: "Surface feel of the designs", ar: "إحساس التصميمات", options: [
          { v: "flat", en: "Clean and flat", ar: "نضيف وفلات" },
          { v: "grain", en: "Grainy, printed texture", ar: "ملمس محبب زي الطباعة" },
          { v: "handmade", en: "Handmade, paper and paint", ar: "يدوي، ورق وألوان" },
          { v: "glossy", en: "Glossy and polished", ar: "لامع ومصقول" } ] },
        { id: "logo_where", type: "multi", required: true, en: "Where will the logo appear most?", ar: "اللوجو هيظهر فين أكتر؟", help: { en: "Pick any.", ar: "اختار اللي ينطبق." }, options: [
          { v: "social", en: "Social media profile", ar: "صورة البروفايل على السوشيال" },
          { v: "website", en: "Website", ar: "الموقع" },
          { v: "app_icon", en: "App icon", ar: "أيقونة التطبيق" },
          { v: "packaging", en: "Packaging and labels", ar: "التغليف والليبلز" },
          { v: "product", en: "On the product itself", ar: "على المنتج نفسه" },
          { v: "signage", en: "Shop sign or storefront", ar: "يافطة المحل أو الواجهة" },
          { v: "uniforms", en: "Uniforms and merchandise", ar: "يونيفورم وهدايا" },
          { v: "vehicles", en: "Vehicles", ar: "العربيات" },
          { v: "documents", en: "Documents, invoices, presentations", ar: "أوراق وفواتير وعروض تقديمية" } ] }
      ]
    },
    {
      id: "voice",
      en: "How the brand talks",
      ar: "البراند بيتكلم إزاي",
      questions: [
        { id: "tone", type: "tone", required: true, en: "Which post sounds like your brand?", ar: "أنهي بوست شبه البراند بتاعك؟", options: [
          { v: "hype", en: "It's live. Limited spots. Move fast.", ar: "نزل خلاص. الكمية محدودة، الحق." },
          { v: "warm", en: "We made something we think you'll love. Come take a look.", ar: "عملنالك حاجة هتحبها. تعالى شوف." },
          { v: "minimal", en: "New season. Available now.", ar: "موسم جديد. متاح دلوقتي." },
          { v: "witty", en: "Your week called. It needs this.", ar: "أسبوعك كان بيسأل عليك. محتاج ده." },
          { v: "expert", en: "Three years of work went into this. Here's what changed.", ar: "٣ سنين شغل في الحاجة دي. ودي اللي اتغير." },
          { v: "proud", en: "Made here, by people from here. Now available.", ar: "صناعة محلية بإيدين من هنا. متاح دلوقتي." } ] },
        { id: "language", type: "single", required: true, en: "Main language for captions and posts", ar: "اللغة الأساسية في البوستات", options: [
          { v: "local", en: "Local dialect (Egyptian, Gulf, etc.)", ar: "لهجة محلية (مصري، خليجي، إلخ)" },
          { v: "msa", en: "Formal Arabic", ar: "عربي فصحى" },
          { v: "en", en: "English", ar: "إنجليزي" },
          { v: "mix", en: "A mix of Arabic and English", ar: "خليط عربي وإنجليزي" },
          { v: "franco", en: "Franco-Arabic (Arabic in Latin letters)", ar: "فرانكو" } ] },
        { id: "address", type: "single", en: "How should the brand address customers?", ar: "البراند يكلّم العميل إزاي؟", options: [
          { v: "friend", en: "Like a friend", ar: "زي صاحبه" },
          { v: "polite", en: "Polite and respectful", ar: "بأدب واحترام" },
          { v: "formal", en: "Formal", ar: "رسمي" } ] },
        { id: "humour", type: "single", en: "Humour?", ar: "هزار؟", options: [
          { v: "none", en: "None, always serious", ar: "خالص، جد على طول" },
          { v: "light", en: "A light touch now and then", ar: "لمسة خفيفة من وقت للتاني" },
          { v: "core", en: "Humour is part of who we are", ar: "الهزار جزء مننا" } ] },
        { id: "emoji", type: "single", en: "Emojis in posts?", ar: "إيموجي في البوستات؟", options: [
          { v: "none", en: "Never", ar: "خالص" },
          { v: "few", en: "A few", ar: "قليل" },
          { v: "lots", en: "Plenty", ar: "كتير" } ] },
        { id: "tagline", type: "single", en: "Do you want a slogan or tagline?", ar: "عايز شعار أو جملة مميزة للبراند؟", options: [
          { v: "ar", en: "Yes, in Arabic", ar: "أيوه، بالعربي" },
          { v: "en", en: "Yes, in English", ar: "أيوه، بالإنجليزي" },
          { v: "both", en: "Yes, in both", ar: "أيوه، بالاتنين" },
          { v: "have", en: "We already have one", ar: "عندنا واحدة بالفعل" },
          { v: "no", en: "No", ar: "لا" } ] },
        { id: "tagline_current", type: "text", showIf: { q: "tagline", in: ["have"] }, en: "Your current slogan", ar: "الشعار الحالي" }
      ]
    },
    {
      id: "photo",
      en: "Photos and packaging",
      ar: "الصور والتغليف",
      questions: [
        { id: "photo_style", type: "multi", max: 2, required: true, en: "Photo style for the brand", ar: "ستايل الصور", help: { en: "Pick up to 2.", ar: "اختار لحد ٢." }, options: [
          { v: "street", en: "Candid, real places", ar: "طبيعي، في أماكن حقيقية" },
          { v: "studio", en: "Clean studio, plain background", ar: "ستوديو نضيف بخلفية سادة" },
          { v: "editorial", en: "Moody editorial, magazine-like", ar: "تحريري بإضاءة درامية زي المجلات" },
          { v: "people", en: "People together, warm and lived-in", ar: "ناس مع بعض، دافي وطبيعي" },
          { v: "product", en: "Product only, close-ups", ar: "المنتج لوحده، صور قريبة" },
          { v: "film", en: "Grainy film look", ar: "شكل فيلم قديم بحبيبات" },
          { v: "illustration", en: "Illustrations instead of photos", ar: "رسومات بدل الصور" } ] },
        { id: "photo_tone", type: "single", en: "Colour of the photos", ar: "ألوان الصور", options: [
          { v: "warm", en: "Warm and golden", ar: "دافية وذهبي" },
          { v: "cool", en: "Cool and blue", ar: "باردة ومايلة للأزرق" },
          { v: "natural", en: "True to life", ar: "طبيعية زي الواقع" },
          { v: "bw", en: "Black and white", ar: "أبيض وأسود" },
          { v: "saturated", en: "Bright and saturated", ar: "مشبعة وزاهية" } ] },
        { id: "photo_place", type: "multi", max: 2, en: "Where would you shoot?", ar: "هتصوّر فين؟", options: [
          { v: "city", en: "City streets and rooftops", ar: "شوارع وأسطح المدينة" },
          { v: "nature", en: "Desert, sea or nature", ar: "صحرا أو بحر أو طبيعة" },
          { v: "old_city", en: "Old city and markets", ar: "المدينة القديمة والأسواق" },
          { v: "modern", en: "Modern buildings and concrete", ar: "مباني حديثة وخرسانة" },
          { v: "our_space", en: "Our own shop, office or kitchen", ar: "المحل أو المكتب أو المطبخ بتاعنا" },
          { v: "home", en: "Homes and everyday life", ar: "بيوت وحياة يومية" },
          { v: "studio", en: "Studio", ar: "ستوديو" } ] },
        { id: "models", type: "single", en: "Who appears in the photos?", ar: "مين يظهر في الصور؟", options: [
          { v: "models", en: "Professional models", ar: "موديلز محترفين" },
          { v: "real", en: "Real customers", ar: "عملاء حقيقيين" },
          { v: "team", en: "The founder and the team", ar: "المؤسس والفريق" },
          { v: "none", en: "Nobody, the product or place only", ar: "محدش، المنتج أو المكان بس" } ] },
        { id: "packaging", type: "single", showIf: { q: "offer_type", in: ["product", "mix"] }, en: "How should an order arrive?", ar: "الأوردر يوصل إزاي؟", options: [
          { v: "simple", en: "Simple branded bag", ar: "كيس بسيط عليه اللوجو" },
          { v: "tissue", en: "Bag with tissue, sticker and a thank-you card", ar: "كيس وجواه ورق تغليف واستيكر وكارت شكر" },
          { v: "box", en: "Branded box, a full unboxing moment", ar: "علبة باسم البراند وتجربة فتح كاملة" },
          { v: "eco", en: "Recycled and plastic-free", ar: "خامات معاد تدويرها ومن غير بلاستيك" },
          { v: "na", en: "We don't ship orders", ar: "مش بنشحن أوردرات" } ] }
      ]
    },
    {
      id: "deliverables",
      en: "What you need",
      ar: "محتاج إيه",
      questions: [
        { id: "assets_needed", type: "multi", required: true, en: "Which brand assets do you need?", ar: "محتاج أنهي ملفات للبراند؟", help: { en: "Pick all you need.", ar: "اختار كل اللي محتاجه." }, options: [
          { v: "logo", en: "Logo set (main, icon, one-colour)", ar: "مجموعة اللوجو (أساسي، أيقونة، لون واحد)" },
          { v: "palette", en: "Colour palette", ar: "باليتة الألوان" },
          { v: "fonts", en: "Font choices", ar: "اختيار الخطوط" },
          { v: "guide", en: "Brand guide (PDF)", ar: "دليل الهوية (PDF)" },
          { v: "social", en: "Social media post templates", ar: "تمبليتس لبوستات السوشيال" },
          { v: "highlights", en: "Profile picture and highlight covers", ar: "صورة البروفايل وأغلفة الهايلايتس" },
          { v: "voice", en: "Tone-of-voice guide and sample captions", ar: "دليل أسلوب الكلام وأمثلة كابشنز" },
          { v: "packaging", en: "Packaging, labels and stickers", ar: "تغليف وليبلز واستيكرز" },
          { v: "print", en: "Business cards and stationery", ar: "كروت شخصية ومطبوعات" },
          { v: "web", en: "Website banners and visuals", ar: "بانرات وصور للموقع" },
          { v: "menu", en: "Menu or price list", ar: "منيو أو قائمة أسعار" },
          { v: "deck", en: "Presentation template", ar: "تمبليت عرض تقديمي" },
          { v: "signage", en: "Shop sign or storefront", ar: "يافطة أو واجهة" } ] },
        { id: "priority", type: "single", required: true, en: "If you could only get one first, which?", ar: "لو هتاخد حاجة واحدة الأول، تبقى إيه؟", sameOptionsAs: "assets_needed" },
        { id: "file_user", type: "single", required: true, en: "Who will use the files day to day?", ar: "مين هيستخدم الملفات كل يوم؟", options: [
          { v: "self_canva", en: "Me, in Canva or on my phone", ar: "أنا، على كانفا أو الموبايل" },
          { v: "designer", en: "A designer", ar: "مصمم" },
          { v: "printer", en: "A printer or factory", ar: "مطبعة أو مصنع" },
          { v: "mix", en: "All of the above", ar: "كل اللي فوق" } ] },
        { id: "options_count", type: "single", en: "How many logo directions do you want to see?", ar: "عايز تشوف كام اتجاه للوجو؟", options: [
          { v: "one", en: "One strong direction", ar: "اتجاه واحد قوي" },
          { v: "two_three", en: "Two or three to choose from", ar: "اتنين أو تلاتة أختار منهم" },
          { v: "many", en: "As many as possible", ar: "أكتر عدد ممكن" } ] },
        { id: "budget", type: "single", en: "Budget for the branding work", ar: "الميزانية لشغل البراندنج", options: [
          { v: "lt100", en: "Under USD 100", ar: "أقل من ١٠٠ دولار" },
          { v: "100_300", en: "USD 100–300", ar: "من ١٠٠ لـ ٣٠٠ دولار" },
          { v: "300_1000", en: "USD 300–1,000", ar: "من ٣٠٠ لـ ١٠٠٠ دولار" },
          { v: "gt1000", en: "Over USD 1,000", ar: "أكتر من ١٠٠٠ دولار" },
          { v: "unsure", en: "Not sure yet", ar: "لسه مش عارف" } ] }
      ]
    },
    {
      id: "wrap",
      en: "Last details",
      ar: "آخر تفاصيل",
      questions: [
        { id: "launch", type: "single", required: true, en: "When do you need the brand ready?", ar: "محتاج البراند يبقى جاهز امتى؟", options: [
          { v: "2w", en: "Within 2 weeks", ar: "خلال أسبوعين" },
          { v: "1m", en: "Within a month", ar: "خلال شهر" },
          { v: "3m", en: "In 1–3 months", ar: "خلال ١ لـ ٣ شهور" },
          { v: "later", en: "No date yet", ar: "لسه مفيش ميعاد" } ] },
        { id: "words_avoid", type: "text", en: "Words or ideas the brand must never use (optional)", ar: "كلمات أو أفكار البراند ميستخدمهاش أبداً (اختياري)" },
        { id: "portfolio_ok", type: "single", en: "Can we show the final work as an example to others?", ar: "ينفع نعرض الشغل النهائي كمثال لناس تانية؟", options: [
          { v: "yes", en: "Yes", ar: "أيوه" },
          { v: "after", en: "Yes, after we launch", ar: "أيوه، بعد ما نبدأ" },
          { v: "no", en: "No", ar: "لا" } ] },
        { id: "anything", type: "long", en: "Anything else we should know?", ar: "فيه أي حاجة تانية لازم نعرفها؟" }
      ]
    }
  ]
};
