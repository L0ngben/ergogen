// footprint file for ergogen automatically generated by kicad-to-ergogen
// include it in ergogen/src/footprints/index.js using
//     require('path/to/this/file.js')
// R_0805_2012Metric_Pad1.20x1.40mm_HandSolder 
module.exports = {
    nets: {
      from: undefined,
      to: undefined
    },
    params: {
      class: 'R'
    },
    body: p => {
      return `(module
      Resistor
      (layer F.Cu)
      (tedit 5F68FEEE)
      ${p.at /* parametric position */}
      (descr "Resistor SMD 0805 (2012 Metric), square (rectangular) end terminal, IPC_7351 nominal with elongated pad for handsoldering. (Body size source: IPC-SM-782 page 72, https://www.pcb-3d.com/wordpress/wp-content/uploads/ipc-sm-782a_amendment_1_and_2.pdf), generated with kicad-footprint-generator")
      (tags "resistor handsolder")
      (attr smd)
      (fp_text reference "${p.ref}" (at 0 -1.65 ${p.rot}) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))) ${p.ref_hide})
      (fp_text value R_0805 (at 0 1.65 ${p.rot}) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
      (fp_text user %R (at 0 0 ${p.rot}) (layer F.Fab) (effects (font (size 0.5 0.5) (thickness 0.08))))
      (fp_line (start -1 0.625) (end -1 -0.625) (layer F.Fab) (width 0.1))
      (fp_line (start -1 -0.625) (end 1 -0.625) (layer F.Fab) (width 0.1))
      (fp_line (start 1 -0.625) (end 1 0.625) (layer F.Fab) (width 0.1))
      (fp_line (start 1 0.625) (end -1 0.625) (layer F.Fab) (width 0.1))
      (fp_line (start -0.227064 0.735) (end 0.227064 0.735) (layer F.SilkS) (width 0.12))
      (fp_line (start -1.85 0.95) (end -1.85 -0.95) (layer F.CrtYd) (width 0.05))
      (fp_line (start -1.85 -0.95) (end 1.85 -0.95) (layer F.CrtYd) (width 0.05))
      (fp_line (start 1.85 -0.95) (end 1.85 0.95) (layer F.CrtYd) (width 0.05))
      (fp_line (start 1.85 0.95) (end -1.85 0.95) (layer F.CrtYd) (width 0.05))
      (pad 2 smd roundrect (at 1 0 ${p.rot}) (size 1.2 1.4) (layers F.Cu F.Paste F.Mask) (roundrect_rratio 0.208333) ${p.net.from.str})
      (pad 1 smd roundrect (at -1 0 ${p.rot}) (size 1.2 1.4) (layers F.Cu F.Paste F.Mask) (roundrect_rratio 0.208333) ${p.net.to.str})
      (pad 2 smd roundrect (at 1 0 ${p.rot}) (size 1.2 1.4) (layers B.Cu B.Paste B.Mask) (roundrect_rratio 0.208333) ${p.net.from.str})
      (pad 1 smd roundrect (at -1 0 ${p.rot}) (size 1.2 1.4) (layers B.Cu B.Paste B.Mask) (roundrect_rratio 0.208333) ${p.net.to.str})
      (model \${KISYS3DMOD}/Resistor_SMD.3dshapes/R_0805_2012Metric.wrl
 (at (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
    )`
    }
  }